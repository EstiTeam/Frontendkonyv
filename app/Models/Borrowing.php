<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Borrowing extends Model
{
    use HasFactory;

    protected $fillable = [
        'konyv_id',
        'kolcsonzo_id',
        'kolcsonzes_kezdete',
        'kolcsonzes_vege'
    ];

    public function book()
    {
        return $this->belongsTo(Book::class, 'konyv_id', 'id');
    }

}
