<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class matkul extends Model
{
    use HasFactory;

    /**
     * post
     *
     * @return void
     */

    // tabel matkul
    protected $fillable = [
        'nama_matkul',
        'deadline',
    ];

    public function jokis()
    {
        return $this->hasMany(joki::class);
    }
}
