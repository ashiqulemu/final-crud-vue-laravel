<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $fillable=['pro_name','pro_type','pro_qty','pro_des'];
}
