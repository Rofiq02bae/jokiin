<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 5 user entries
        User::insert([
            ['nama' => 'Alice', 'nomor' => '081234567890'],
            ['nama' => 'Bob', 'nomor' => '082345678901'],
            ['nama' => 'Charlie', 'nomor' => '083456789012'],
            ['nama' => 'Diana', 'nomor' => '084567890123'],
            ['nama' => 'Ethan', 'nomor' => '085678901234'],
        ]);
    }
}
