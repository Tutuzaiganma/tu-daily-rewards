<?php

namespace Tu\DailyRewards\Info;

use Flarum\Http\RequestUtil;
use Illuminate\Database\ConnectionInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class Mine implements RequestHandlerInterface
{
    /**
     * @var ConnectionInterface
     */
    protected $db;

    public function __construct(ConnectionInterface $db)
    {
        $this->db = $db;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        $queryParams = $request->getQueryParams();
        $page = $this->parsePositiveInt($queryParams['page'] ?? null) ?? 1;
        $count = $this->parsePositiveInt($queryParams['count'] ?? null);

        $total = (int) $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $actor->id)
            ->count('id');

        $rowsQuery = $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $actor->id)
            ->orderBy('created_at', 'desc')
            ->orderBy('id', 'desc');

        if ($count !== null) {
            $rowsQuery->forPage($page, $count);
        }

        $rows = $rowsQuery->get(['id', 'user_id', 'type', 'amount', 'claimed_at', 'created_at']);

        $data = $rows->map(function ($row) {
            return [
                'id' => (int) $row->id,
                'userId' => (int) $row->user_id,
                'type' => (string) $row->type,
                'amount' => (int) $row->amount,
                'claimedAt' => $row->claimed_at,
                'createdAt' => $row->created_at,
            ];
        })->values()->all();

        return new JsonResponse([
            'success' => true,
            'data' => $data,
            'pagination' => [
                'page' => $page,
                'count' => $count ?? $total,
                'total' => $total,
                'hasMore' => $count !== null && ($page * $count) < $total,
            ],
        ], 200);
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
}
