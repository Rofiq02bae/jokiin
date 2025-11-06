# 🔐 Admin Dashboard - Jokiin

## Login Credentials

**Admin Access:**
- **Nama:** Anggun
- **Nomor:** 081568389940
- **Password:** anggun123

## Akses Dashboard

1. **Login Page:** `http://localhost:8000/admin/login`
2. Masukkan nomor dan password
3. Klik "Login"
4. Akan redirect ke Dashboard

## Fitur Dashboard

### 📊 Statistics Cards
- **Total Orders:** Jumlah semua order
- **Pending Orders:** Order yang masih menunggu
- **Completed Orders:** Order yang sudah selesai
- **Total Users:** Jumlah user terdaftar

### 📋 Daftar Orders
Tabel yang menampilkan semua order dengan kolom:
- **ID:** Nomor order
- **User:** Nama dan nomor WA user
- **Matkul:** Mata kuliah
- **Deadline:** Tanggal deadline
- **Harga:** Harga order (Rp)
- **Status:** Status order (dapat diubah)
- **File:** Link download file (jika ada)
- **Aksi:** Tombol detail

### ⚡ Fungsi-fungsi

#### 1. Update Status Order
- Klik dropdown status pada tabel
- Pilih status baru:
  - `Pending` (Kuning) - Menunggu
  - `Proses` (Biru) - Sedang dikerjakan
  - `Selesai` (Hijau) - Sudah selesai
  - `Dibatalkan` (Merah) - Order dibatalkan
- Status akan otomatis tersimpan

#### 2. Download File
- Jika user upload file, akan ada link "Download"
- Klik untuk download file ke komputer
- Jika tidak ada file, akan tampil "-"

#### 3. Lihat Detail Order
- Klik tombol "Detail"
- Akan muncul popup dengan informasi lengkap:
  - Nama user
  - Mata kuliah
  - Deadline
  - Deskripsi lengkap tugas

#### 4. Logout
- Klik tombol "Logout" di header
- Akan kembali ke halaman login
- Session admin akan dihapus

## Security Features

✅ **Protected Routes:** Hanya admin yang login bisa akses dashboard
✅ **Session-based Auth:** Menggunakan session untuk tracking admin
✅ **Password Hashing:** Password di-hash dengan bcrypt
✅ **Unique Phone Number:** Hanya nomor 081568389940 (Anggun) yang bisa login
✅ **File Download Protection:** Hanya admin yang bisa download file user

## File Structure

```
app/
├── Http/Controllers/
│   └── AdminController.php      # Controller untuk admin
├── Models/
│   └── Admin.php                # Model admin dengan password hashing
database/
├── migrations/
│   └── *_create_admins_table.php
└── seeders/
    └── AdminSeeder.php          # Seeder untuk admin Anggun
resources/js/pages/admin/
├── login.tsx                    # Halaman login admin
└── dashboard.tsx                # Dashboard admin
routes/
└── web.php                      # Routes /admin/*
```

## Routes

| Method | URL | Fungsi |
|--------|-----|--------|
| GET | `/admin/login` | Tampil halaman login |
| POST | `/admin/login` | Proses login |
| GET | `/admin/dashboard` | Tampil dashboard (protected) |
| POST | `/admin/joki/{id}/update-status` | Update status order |
| GET | `/admin/joki/{id}/download` | Download file order |
| POST | `/admin/logout` | Logout admin |

## Tips Penggunaan

1. **Refresh Data:** Reload page untuk melihat data terbaru
2. **Sort Orders:** Orders diurutkan dari yang terbaru
3. **Mobile Friendly:** Dashboard responsive untuk mobile
4. **Quick Status Change:** Ubah status langsung di tabel tanpa popup
5. **File Management:** Download file langsung dari browser

## Troubleshooting

**Tidak bisa login?**
- Pastikan nomor: `081568389940`
- Pastikan password: `anggun123`
- Clear browser cache dan coba lagi

**Dashboard kosong?**
- Belum ada order dari user
- Coba buat order dummy dari halaman user

**File tidak bisa download?**
- Pastikan symbolic link storage sudah dibuat: `php artisan storage:link`
- Check folder `storage/app/public/joki_files/` ada

**Session expired?**
- Login ulang
- Check session configuration di `.env`

## Next Steps

Untuk keamanan lebih baik:
1. Ganti password default `anggun123`
2. Implement 2FA (Two-Factor Authentication)
3. Add activity logging untuk audit trail
4. Rate limiting untuk login attempts
