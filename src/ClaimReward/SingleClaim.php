<?php

namespace Tu\DailyRewards\ClaimReward;

use Carbon\CarbonImmutable;
use Flarum\Http\RequestUtil;
use Illuminate\Database\ConnectionInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Tu\DailyRewards\Router\Status;

class SingleClaim implements RequestHandlerInterface
{
    /**
     * @var ConnectionInterface
     */
    protected $db;

    /**
     * @var Status
     */
    protected $status;

    public function __construct(ConnectionInterface $db, Status $status)
    {
        $this->db = $db;
        $this->status = $status;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        $body = $request->getParsedBody();
        if ($body === null) {
            $body = [];
        }

        if (!is_array($body)) {
            return $this->fail();
        }

        $unexpectedKeys = array_diff(array_keys($body), ['id']);
        if (!empty($unexpectedKeys)) {
            return $this->fail();
        }

        $rewardId = $this->parsePositiveInt($body['id'] ?? null);
        if ($rewardId === null) {
            return $this->fail();
        }

        $timezone = $this->getTimezoneFromStatus();
        if ($timezone === null) {
            return $this->fail();
        }

        [$claimableStartAt] = $this->getCurrentDayWindow($timezone);
        $claimAt = $this->getNowByTimezone($timezone);

        $result = $this->db->transaction(function () use ($actor, $rewardId, $claimableStartAt, $claimAt): array {
            $row = $this->db->table('tu_daily_rewards_history')
                ->where('id', $rewardId)
                ->where('user_id', $actor->id)
                ->lockForUpdate()
                ->first(['id', 'amount', 'claimed_at', 'created_at']);

            if (!$row) {
                return $this->buildResult(false, 0, 0);
            }

            if (!empty($row->claimed_at)) {
                return $this->buildResult(false, 0, 0);
            }

            $createdAt = (string) ($row->created_at ?? '');
            if ($createdAt === '' || $createdAt < $claimableStartAt) {
                return $this->buildResult(false, 0, 0);
            }

            $affected = $this->db->table('tu_daily_rewards_history')
                ->where('id', (int) $row->id)
                ->whereNull('claimed_at')
                ->update([
                    'claimed_at' => $claimAt,
                ]);

            if ($affected !== 1) {
                return $this->buildResult(false, 0, 0);
            }

            $claimedTotal = (int) ($row->amount ?? 0);
            if ($claimedTotal <= 0) {
                return $this->buildResult(false, 0, 0);
            }

            $moneyUpdated = $this->db->table('users')
                ->where('id', $actor->id)
                ->increment('money', $claimedTotal);

            if (!$moneyUpdated) {
                return $this->buildResult(false, 0, 0);
            }

            return $this->buildResult(true, 1, $claimedTotal);
        });

        return new JsonResponse($result, 200);
    }

    protected function parsePositiveInt($value): ?int
    {
        if (is_int($value)) {
            return $value > 0 ? $value : null;
        }

        if (is_string($value) && preg_match('/^[1-9]\d*$/', $value) === 1) {
            return (int) $value;
        }

        return null;
    }

    protected function getTimezoneFromStatus(): ?string
    {
        $config = $this->status->getConfig();
        $timezone = trim((string) ($config['global']['timezone'] ?? ''));

        return $timezone !== '' ? $timezone : null;
    }

    protected function getCurrentDayWindow(string $timezone): array
    {
        try {
            $now = CarbonImmutable::now($timezone);
        } catch (\Throwable $e) {
            $now = CarbonImmutable::now(date_default_timezone_get());
        }

        return [
            $now->startOfDay()->toDateTimeString(),
            $now->endOfDay()->toDateTimeString(),
        ];
    }

    protected function getNowByTimezone(string $timezone): string
    {
        try {
            return CarbonImmutable::now($timezone)->toDateTimeString();
        } catch (\Throwable $e) {
            return CarbonImmutable::now(date_default_timezone_get())->toDateTimeString();
        }
    }

    protected function fail(): JsonResponse
    {
        return new JsonResponse($this->buildResult(false, 0, 0), 200);
    }

    protected function buildResult(bool $success, int $claimedCount, int $claimedTotal): array
    {
        return [
            'success' => $success,
            'data' => [
                'claimedCount' => $claimedCount,
                'claimedTotal' => $claimedTotal,
            ],
        ];
    }
}
