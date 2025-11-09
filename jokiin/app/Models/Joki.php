<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Joki extends Model
{
    // database table joki
    protected $fillable = [
        'id_user',
        'id_matkul',
        'file_path',
        'harga',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

    public function matkul()
    {
        return $this->belongsTo(Matkul::class, 'id_matkul', 'id');
    }

    public function detail()
    {
        return $this->hasOne(details::class, 'id_joki', 'id');
    }
}
