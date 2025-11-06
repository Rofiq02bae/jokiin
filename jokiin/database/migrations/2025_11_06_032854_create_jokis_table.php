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
        Schema::create('jokis', function (Blueprint $table) {
            $table->id();
<<<<<<<< HEAD:jokiin/database/migrations/2025_11_04_010956_create_jokis_table.php
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade');
            $table->foreignId('id_matkul')->constrained('matkuls')->onDelete('cascade');
            $table->string('status');
            $table->decimal('harga', 10, 2);
            $table->timestamps();
========
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_matkul');
            $table->integer('harga');
            $table->string('status');
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_matkul')->references('id')->on('matkuls')->onDelete('cascade');
>>>>>>>> dev-react:jokiin/database/migrations/2025_11_06_032854_create_jokis_table.php
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jokis');
    }
};
