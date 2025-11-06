<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matkul extends Model
{
    // database table matkul
    protected $fillable = [
        'id_matkul',
        'nama_matkul',
        'deadline',
        'deskripsi',
    ];

    public function jokis()
    {
        return $this->hasMany(Joki::class, 'id_matkul', 'id_matkul');
    }
}
