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
        // 5 joki entries dengan details
        $joki1 = Joki::create([
            'id_user' => 1,
            'id_matkul' => 1,
            'harga' => 50000,
            'status' => 'pending',
        ]);
        $joki1->detail()->create([
            'deadline' => '2025-11-15',
            'deskripsi' => 'Tugas tentang logika dan himpunan.',
        ]);
        
    }
}
