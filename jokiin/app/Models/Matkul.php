<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matkul extends Model
{
    // database matkul
    protected $fillable = [
        'nama_matkul',
        'deadline',
        'deskripsi',
    ];

    public function jokis()
    {
        return $this->hasMany(Joki::class, 'id_matkul');
    }
}
