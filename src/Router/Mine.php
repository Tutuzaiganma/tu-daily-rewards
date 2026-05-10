<?php

namespace Tu\DailyRewards\Router;

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

        $rows = $this->db->table('tu_daily_rewards_history')
            ->where('user_id', $actor->id)
            ->orderBy('created_at', 'desc')
            ->orderBy('id', 'desc')
            ->get(['id', 'user_id', 'type', 'amount', 'claimed_at', 'created_at']);

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
        ], 200);
    }
}
