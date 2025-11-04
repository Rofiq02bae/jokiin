<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokiController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\OrderController;

// Route::get('/', [JokiController::class, 'index'], ['title' => 'Home']);
// Route::get('/about', [AboutController::class, 'index'], ['title' => 'About'])->name('about');
// Route::get('/contact', [ContactController::class, 'index'], ['title' => 'Contact'])->name('contact');
// Route::get('/order', [OrderController::class, 'index'], ['title' => 'How To Order'])->name('order');
Route::get('/', function () {
    return view('index', ['title' => 'Home']);
});

Route::get('/about', function () {
    return view('about', ['title' => 'About']);
})->name('about');

Route::get('/contact', function () {
    return view('contact', ['title' => 'Contact']);
})->name('contact');

Route::get('/order', function () {
    return view('order', ['title' => 'How To Order']);
})->name('order');
