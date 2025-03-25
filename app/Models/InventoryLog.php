<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InventoryLog extends Model
{
    use HasFactory;
    protected $fillable = ['equipment_id', 'status', 'notes'];
    public function equipment() { return $this->belongsTo(Equipment::class); }
}
