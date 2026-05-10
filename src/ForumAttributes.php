<?php

namespace Tu\DailyRewards;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $moneyName = (string) $this->settings->get('antoinefr-money.moneyname', '');

        return [
            'tu-daily-rewards.currencyName' => $this->extractCurrencyName($moneyName),
        ];
    }

    protected function extractCurrencyName(string $moneyName): string
    {
        $normalized = trim((string) str_ireplace('[money]', '', $moneyName));

        return $normalized;
    }
}
