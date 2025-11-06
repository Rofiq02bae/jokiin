<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JokiController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/add-joki', [UserController::class, 'create'])->name('add-joki');
Route::post('/users', [UserController::class, 'store'])->name('users.store');

Route::get('/joki/create', [JokiController::class, 'create'])->name('joki.create');
Route::post('/jokis', [JokiController::class, 'store'])->name('jokis.store');

Route::get('/order-success', function () {
    return Inertia::render('order-success');
})->name('order.success');

Route::get('/cara-order', function () {
    return Inertia::render('cara-order');
})->name('cara-order');

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/login', [AdminController::class, 'showLogin'])->name('admin.login');
    Route::post('/login', [AdminController::class, 'login'])->name('admin.login.post');
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::post('/joki/{id}/update-status', [AdminController::class, 'updateStatus'])->name('admin.joki.update-status');
    Route::get('/joki/{id}/download', [AdminController::class, 'downloadFile'])->name('admin.joki.download');
    Route::post('/logout', [AdminController::class, 'logout'])->name('admin.logout');
});
