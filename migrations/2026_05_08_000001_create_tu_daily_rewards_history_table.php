<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('tu_daily_rewards_history', function (Blueprint $table) {
    $table->increments('id');
    $table->unsignedInteger('user_id')->index();
    $table->string('type', 50);
    $table->unsignedInteger('amount');
    $table->timestamp('claimed_at')->nullable();
    $table->timestamp('created_at')->useCurrent();

    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
});
