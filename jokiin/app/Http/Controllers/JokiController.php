<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JokiController extends Controller
{
    //
    public function index()
    {
        return view('joki.index');
    }
}
