<?php

namespace Database\Seeders;

use App\Models\Matkul;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MatkulSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Matkul::create([
            'nama_matkul' => 'Matematika Diskrit',
            'deadline' => '2023-12-01',
            'deskripsi' => 'Tugas Matematika Diskrit tentang logika dan himpunan.',
        ]);
        Matkul::create([
            'nama_matkul' => 'Algoritma dan Pemrograman',
            'deadline' => '2023-12-05',
            'deskripsi' => 'Tugas pemrograman menggunakan bahasa Python.',
        ]);
        Matkul::create([
            'nama_matkul' => 'Basis Data',
            'deadline' => '2023-12-10',
            'deskripsi' => 'Tugas pembuatan skema basis data menggunakan MySQL.',
        ]);
    }
}
