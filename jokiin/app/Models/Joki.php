<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Joki extends Model
{
    // database joki
    protected $fillable = [
        'id_user',
        'id_matkul',
        'status',
        'harga',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    public function matkul()
    {
        return $this->belongsTo(Matkul::class, 'id_matkul');
    }
}
