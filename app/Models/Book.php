<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'cim',
        'szerzo',
        'tema',
        'idegen_cim',
        'besorolas',
        'borito',
        'elerheto'
    ];

    public function borrowing()
    {
        return $this->hasOne(Borrowing::class, 'konyv_id', 'id');
    }

    public static function OsszesKonyv()
    {
        return self::all();
    }

    public static function KeresesCimAlapján($cim)
    {
        return self::where('cim', 'LIKE', '%' . $cim . '%')->get();
    }



    


}
