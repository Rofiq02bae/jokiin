<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $fillable = [
        'nama',
        'nomor',
    ];
    public function jokis()
    {
        return $this->hasMany(joki::class, 'id_user');
    }
}
