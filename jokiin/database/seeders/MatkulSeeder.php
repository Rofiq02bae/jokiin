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
            'nama_matkul' => 'Ilmu biomedik dasar',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan dasar',
        ]);

        Matkul::create([
            'nama_matkul' => 'Manajemen keperawatan ',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan maternitas',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan medikal bedah ',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan anak ',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan gawat darurat',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan komunitas ',
        ]);
        
        Matkul::create([
            'nama_matkul' => 'Keperawatan keluarga',
        ]);

        Matkul::create([
            'nama_matkul' => 'Keperawatan gerontik',
        ]);

        Matkul::create([
            'nama_matkul' => 'Bahasa Inggris',
        ]);

        Matkul::create([
            'nama_matkul' => 'Bahasa Arab',
        ]);

        Matkul::create([
            'nama_matkul' => 'Karya Tulis Ilmiah',
        ]);

        Matkul::create([
            'nama_matkul' => 'Web Programming',
        ]);
    }
}
