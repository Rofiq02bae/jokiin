<?php

namespace Database\Seeders;

use App\Models\Joki;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JokiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Joki::create([
            'id_user' => 1,
            'id_matkul' => 1,
            'status' => 'selesai',
            'harga' => 150000,
        ]);
        Joki::create([
            'id_user' => 2,
            'id_matkul' => 2,
            'status' => 'proses',
            'harga' => 200000,
        ]);
        Joki::create([
            'id_user' => 3,
            'id_matkul' => 3,
            'status' => 'selesai',
            'harga' => 180000,
        ]);

    }
}
