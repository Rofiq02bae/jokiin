<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('jokis', function (Blueprint $table) {
            $table->date('deadline')->nullable()->after('id_matkul');
            $table->text('deskripsi')->nullable()->after('deadline');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('jokis', function (Blueprint $table) {
            $table->dropColumn(['deadline', 'deskripsi']);
        });
    }
};
