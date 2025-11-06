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
        Schema::create('matkuls', function (Blueprint $table) {
            $table->id();
<<<<<<<< HEAD:jokiin/database/migrations/2025_11_04_011002_create_matkuls_table.php
            $table->string('nama_matkul');
            $table->date('deadline');
            $table->text('deskripsi');
========
            $table->string('nama');
            $table->string('nomor');
>>>>>>>> dev-react:jokiin/database/migrations/2025_11_06_032958_create_users_table.php
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
<<<<<<<< HEAD:jokiin/database/migrations/2025_11_04_011002_create_matkuls_table.php
        Schema::dropIfExists('matkuls');
========
        Schema::dropIfExists('users');
>>>>>>>> dev-react:jokiin/database/migrations/2025_11_06_032958_create_users_table.php
    }
};
