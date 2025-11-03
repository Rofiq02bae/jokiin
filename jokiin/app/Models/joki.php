<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class joki extends Model
{
    use HasFactory;
    /**
     * post
     *
     * @return void
     */
    // tabel hasil 
    protected $fillable = [
        'user_id',
        'matkul_id',
        'status',
        'hasil_file',
        'deskripsi',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function matkul()
    {
        return $this->belongsTo(matkul::class);
    }
}
