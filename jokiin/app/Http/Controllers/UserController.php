<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function create()
    {
        return Inertia::render('add_joki');
    }

    public function store(Request $request)
    {
        \Log::info('User store called', $request->all());
        
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nomor' => 'required|string|max:20',
        ]);

        $user = User::create($validated);

        \Log::info('User created', ['user_id' => $user->id]);

        // Simpan user_id di session untuk digunakan di form joki
        session(['user_id' => $user->id]);

        return redirect()->route('joki.create')->with('success', 'User berhasil ditambahkan! Silakan isi detail joki.');
    }

    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
}
