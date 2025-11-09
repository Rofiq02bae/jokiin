<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class details extends Model
{
    protected $fillable = [
        'id_joki',
        'deadline',
        'deskripsi',
    ];

    public function joki()
    {
        return $this->belongsTo(Joki::class, 'id_joki', 'id');
    }
}
