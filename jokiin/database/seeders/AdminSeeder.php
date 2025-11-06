<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'nama' => 'Anggun',
            'nomor' => '081568389940',
            'password' => 'anggun123', // Will be hashed automatically
        ]);
    }
}
