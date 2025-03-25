<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = ['rental_id', 'user_id', 'amount', 'payment_method', 'status', 'transaction_id'];
    public function rental() { return $this->belongsTo(Rental::class); }
    public function user() { return $this->belongsTo(User::class); }
}
