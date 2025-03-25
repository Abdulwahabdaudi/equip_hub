<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Equipment extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'category_id', 'owner_id', 'price_per_day', 'status'];
    public function category() { return $this->belongsTo(Category::class); }
    public function owner() { return $this->belongsTo(User::class, 'owner_id'); }
    public function rentals() { return $this->hasMany(Rental::class); }
}
