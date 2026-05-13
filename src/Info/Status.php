<?php

namespace Tu\DailyRewards\Info;

use Flarum\Settings\SettingsRepositoryInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class Status implements RequestHandlerInterface
{
    protected const EXTENSION_ID = 'tu-daily-rewards';
    protected const REWARD_TYPES = ['post', 'reply', 'view'];

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        return new JsonResponse([
            'success' => true,
            'data' => $this->getConfig(),
        ], 200);
    }

    /**
     * 统一返回总开关、子开关和奖励配置。
     */
    public function getConfig(): array
    {
        $timezone = trim((string) $this->getSetting('timezone', ''));
        $globalEnabled = $this->isEnabled('enabled');
        $globalEffectiveEnabled = $globalEnabled && $timezone !== '';

        $rewards = [];
        foreach (self::REWARD_TYPES as $type) {
            $rewards[$type] = $this->getRewardConfig($type);
        }

        return [
            'global' => [
                'enabled' => $globalEnabled,
                'effectiveEnabled' => $globalEffectiveEnabled,
                'timezone' => $timezone,
            ],
            'switches' => [
                'global' => $globalEnabled,
                'post' => $rewards['post']['enabled'],
                'reply' => $rewards['reply']['enabled'],
                'view' => $rewards['view']['enabled'],
            ],
            'rewards' => $rewards,
        ];
    }

    protected function getRewardConfig(string $type): array
    {
        $enabled = $this->isEnabled("{$type}_enabled");
        $amount = $this->toInt($this->getSetting("{$type}_reward_amount", '0'));
        $minChars = $type === 'reply' ? $this->toInt($this->getSetting('reply_min_chars', '0')) : 0;
        $limitEnabled = $this->isEnabled("{$type}_limit_enabled");
        $limitAmount = $this->toInt($this->getSetting("{$type}_limit_amount", '0'));

        return [
            'enabled' => $enabled,
            'effectiveEnabled' => $enabled && $amount > 0,
            'amount' => $amount,
            'minChars' => $minChars,
            'limitEnabled' => $limitEnabled,
            'limitAmount' => $limitAmount,
        ];
    }

    protected function isEnabled(string $key): bool
    {
        return $this->getSetting($key, '0') === '1';
    }

    protected function toInt(?string $value): int
    {
        $parsed = (int) $value;

        return $parsed > 0 ? $parsed : 0;
    }

    protected function getSetting(string $key, ?string $default = null): ?string
    {
        return $this->settings->get(self::EXTENSION_ID . '.' . $key, $default);
    }
}
