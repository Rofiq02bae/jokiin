<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matkul extends Model
{
    // database table matkul
    protected $fillable = [
        'nama_matkul'
    ];

    public function jokis()
    {
        return $this->hasMany(Joki::class, 'id_matkul', 'id');
    }
}
