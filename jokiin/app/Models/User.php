<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // database table users
    protected $fillable = [
        'nama',
        'nomor'
    ];

    public function jokis()
    {
        return $this->hasMany(Joki::class, 'id_user', 'id');
    }
}
