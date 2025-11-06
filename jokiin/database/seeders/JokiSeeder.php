<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Joki;

class JokiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 5 joki entries
        Joki::create([
            'id_user' => 1,
            'id_matkul' => 1,
            'harga' => 50000,
            'status' => 'available',
        ]);

        Joki::create([
            'id_user' => 2,
            'id_matkul' => 2,
            'harga' => 60000,
            'status' => 'available',
        ]);

        Joki::create([
            'id_user' => 3,
            'id_matkul' => 3,
            'harga' => 70000,
            'status' => 'available',
        ]);

        Joki::create([
            'id_user' => 4,
            'id_matkul' => 4,
            'harga' => 80000,
            'status' => 'available',
        ]);

        Joki::create([
            'id_user' => 5,
            'id_matkul' => 5,
            'harga' => 90000,
            'status' => 'available',
        ]);
    }
}
