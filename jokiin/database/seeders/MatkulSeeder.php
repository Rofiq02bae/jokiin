<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Matkul;

class MatkulSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 5 matkul entries
        Matkul::create([
            'nama_matkul' => 'Matematika Diskrit',
            'deadline' => '2024-07-15',
            'deskripsi' => 'Tugas tentang logika dan himpunan.',
        ]);

        Matkul::create([
            'nama_matkul' => 'Algoritma dan Pemrograman',
            'deadline' => '2024-07-20',
            'deskripsi' => 'Tugas tentang struktur data dan algoritma.',
        ]);

        Matkul::create([
            'nama_matkul' => 'Basis Data',
            'deadline' => '2024-07-25',
            'deskripsi' => 'Tugas tentang perancangan basis data.',
        ]);

        Matkul::create([
            'nama_matkul' => 'Jaringan Komputer',
            'deadline' => '2024-07-30',
            'deskripsi' => 'Tugas tentang konsep jaringan komputer.',
        ]);

        Matkul::create([
            'nama_matkul' => 'Sistem Operasi',
            'deadline' => '2024-08-05',
            'deskripsi' => 'Tugas tentang manajemen sistem operasi.',
        ]);
    }
}
