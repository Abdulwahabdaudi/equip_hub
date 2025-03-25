<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['rental_id', 'user_id', 'rating', 'comment'];
    public function rental() { return $this->belongsTo(Rental::class); }
    public function user() { return $this->belongsTo(User::class); }
}
