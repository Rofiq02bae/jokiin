<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Joki;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('admin/login');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'nomor' => 'required|string',
            'password' => 'required|string',
        ]);

        $admin = Admin::where('nomor', $validated['nomor'])->first();

        if (!$admin || !Hash::check($validated['password'], $admin->password)) {
            return back()->withErrors(['nomor' => 'Nomor atau password salah.']);
        }

        session(['admin_id' => $admin->id]);

        return redirect()->route('admin.dashboard');
    }

    public function dashboard()
    {
        if (!session('admin_id')) {
            return redirect()->route('admin.login');
        }

        $jokis = Joki::with(['user', 'matkul'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($joki) {
                return [
                    'id' => $joki->id,
                    'user_nama' => $joki->user->nama,
                    'user_nomor' => $joki->user->nomor,
                    'matkul' => $joki->matkul->nama_matkul,
                    'deadline' => $joki->deadline,
                    'deskripsi' => $joki->deskripsi,
                    'file_path' => $joki->file_path,
                    'file_url' => $joki->file_path ? asset('storage/' . $joki->file_path) : null,
                    'harga' => $joki->harga,
                    'status' => $joki->status,
                    'created_at' => $joki->created_at->format('d M Y H:i'),
                ];
            });

        $stats = [
            'total_orders' => Joki::count(),
            'pending_orders' => Joki::where('status', 'pending')->count(),
            'completed_orders' => Joki::where('status', 'selesai')->count(),
            'total_users' => User::count(),
        ];

        return Inertia::render('admin/dashboard', [
            'jokis' => $jokis,
            'stats' => $stats,
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        if (!session('admin_id')) {
            return redirect()->route('admin.login');
        }

        $validated = $request->validate([
            'status' => 'required|in:pending,proses,selesai,dibatalkan',
        ]);

        $joki = Joki::findOrFail($id);
        $joki->update(['status' => $validated['status']]);

        return back()->with('success', 'Status berhasil diupdate!');
    }

    public function downloadFile($id)
    {
        if (!session('admin_id')) {
            return redirect()->route('admin.login');
        }

        $joki = Joki::findOrFail($id);

        if (!$joki->file_path) {
            return back()->withErrors(['file' => 'File tidak ditemukan.']);
        }

        return Storage::disk('public')->download($joki->file_path);
    }

    public function logout()
    {
        session()->forget('admin_id');
        return redirect()->route('admin.login');
    }
}
