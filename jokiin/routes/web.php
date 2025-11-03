<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokiController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [JokiController::class, 'index'])->name('joki.index');


