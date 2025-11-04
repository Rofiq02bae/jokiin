<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'Joki Satu',
            'nomor' => '081234567890',
        ]);

        User::create([
            'name' => 'Joki Dua',
            'nomor' => '089876543210',
        ]);
        User::create([
            'name' => 'Joki Tiga',
            'nomor' => '082233445566',
        ]);
        User::create([
            'name' => 'Joki Empat',
            'nomor' => '085566778899',
        ]);
    }
}
