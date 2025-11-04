<?php

namespace App\Http\Controllers;

use App\Models\Joki;
use Illuminate\Http\Request;

class JokiController extends Controller
{
    // tampilkan index jokis
    public function index()
    {
        $jokis = Joki::all();
        return view('index', compact('jokis'));
    }
}