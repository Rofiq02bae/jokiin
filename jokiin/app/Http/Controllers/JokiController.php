<?php

namespace App\Http\Controllers;

use App\Models\Joki;
use App\Models\Matkul;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JokiController extends Controller
{
    public function create()
    {
        // Ambil user_id dari session
        $userId = session('user_id');
        
        if (!$userId) {
            return redirect()->route('add-joki')->with('error', 'Silakan login terlebih dahulu.');
        }

        $user = User::find($userId);
        $matkuls = Matkul::all();

        return Inertia::render('details', [
            'user' => $user,
            'matkuls' => $matkuls
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_matkul' => 'required|integer|exists:matkuls,id',
            'deadline' => 'required|date',
            'deskripsi' => 'required|string',
            'file' => 'nullable|file|mimes:png,jpg,jpeg,pdf,doc,docx|max:10240', // max 10MB
        ]);

        // Ambil user_id dari session
        $userId = session('user_id');
        
        if (!$userId) {
            return redirect()->route('add-joki')->with('error', 'Session expired. Silakan login ulang.');
        }

        // Handle file upload
        $filePath = null;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('joki_files', $fileName, 'public');
        }

        // Buat atau ambil matkul berdasarkan id
        $matkul = Matkul::find($validated['id_matkul']);

        // Hitung harga berdasarkan kompleksitas atau set default
        $harga = 50000; // Default harga, bisa disesuaikan

        $joki = Joki::create([
            'id_user' => $userId,
            'id_matkul' => $validated['id_matkul'],
            'deadline' => $validated['deadline'],
            'deskripsi' => $validated['deskripsi'],
            'file_path' => $filePath,
            'harga' => $harga,
            'status' => 'pending',
        ]);

        // Clear session setelah order berhasil
        session()->forget('user_id');

        return redirect()->route('order.success')->with('success', 'Order joki berhasil ditambahkan!');
    }
}
