# 🎓 Jokiin - Jasa Joki Tugas Kuliah

Platform modern untuk order jasa joki tugas kuliah dengan antarmuka yang user-friendly.

![Laravel](https://img.shields.io/badge/Laravel-12.x-red?logo=laravel)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss)
![Inertia.js](https://img.shields.io/badge/Inertia.js-2.x-9553e9)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 👥 User Features
- ✅ **Simple Registration** - Login dengan nama dan nomor WhatsApp
- ✅ **Order Joki** - Form lengkap untuk order jasa joki
- ✅ **Pilih Mata Kuliah** - Dropdown mata kuliah yang tersedia
- ✅ **Set Deadline** - Tentukan deadline pengerjaan
- ✅ **Upload File** - Upload file pendukung (PNG, JPG, PDF, Word)
- ✅ **Deskripsi Detail** - Jelaskan tugas secara lengkap
- ✅ **Order Success** - Konfirmasi order berhasil
- ✅ **Cara Order** - Panduan lengkap cara melakukan order

### 🔐 Admin Features
- ✅ **Secure Login** - Authentication khusus admin
- ✅ **Dashboard** - Overview statistik orders
- ✅ **Manage Orders** - Lihat dan kelola semua orders
- ✅ **Update Status** - Update status order (Pending, Proses, Selesai, Dibatalkan)
- ✅ **Download Files** - Download file yang diupload user
- ✅ **User Management** - Lihat daftar semua users
- ✅ **Statistics** - Total orders, pending, completed, users

### 🎨 UI/UX
- ✅ **Responsive Design** - Mobile, tablet, dan desktop friendly
- ✅ **Modern Interface** - Gradient backgrounds, smooth animations
- ✅ **Interactive Forms** - Validation dan error handling
- ✅ **Animated Transitions** - Motion/Framer Motion animations
- ✅ **Beautiful Components** - Shadcn UI component library

---

## 🛠️ Tech Stack

### Backend
- **Framework:** Laravel 12.x
- **Language:** PHP 8.2+
- **Database:** SQLite (dev) / MySQL / PostgreSQL (production)
- **Authentication:** Session-based
- **File Storage:** Laravel Storage (local/public disk)

### Frontend
- **Library:** React 18+
- **Language:** TypeScript 5.x
- **Framework:** Inertia.js 2.0 (Server-side routing)
- **Build Tool:** Vite 7.x
- **CSS Framework:** Tailwind CSS 4.x
- **Components:** Shadcn UI
- **Forms:** React Hook Form
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

### Development Tools
- **Composer:** PHP dependency manager
- **NPM:** JavaScript package manager
- **Laravel Wayfinder:** Route/action typing
- **ESLint:** JavaScript linting
- **Prettier:** Code formatting

---

## 📦 Prerequisites

Sebelum install, pastikan system sudah memiliki:

- **PHP** >= 8.2
- **Composer** >= 2.7
- **Node.js** >= 18.x
- **NPM** >= 9.x
- **Git**

### PHP Extensions Required
```bash
php -m | grep -E 'pdo|mbstring|tokenizer|xml|ctype|json|bcmath|fileinfo|openssl'
```

---

## 🚀 Installation

### 1. Clone Repository
```bash
git clone https://github.com/Rofiq02bae/jokiin.git
cd jokiin/jokiin
```

### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install
```

### 3. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Database Setup
```bash
# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed --class=MatkulSeeder  # Mata kuliah data
php artisan db:seed --class=AdminSeeder   # Admin Anggun
```

### 5. Storage Link
```bash
# Create symbolic link for storage
php artisan storage:link

# Create upload directory
mkdir -p storage/app/public/joki_files
```

### 6. Build Frontend
```bash
# Development
npm run dev

# Production
npm run build
```

### 7. Run Application
```bash
# Start Laravel development server
php artisan serve

# In another terminal, start Vite dev server (for HMR)
npm run dev
```

Access application at: **http://localhost:8000**

---

## 📖 Usage

### User Flow
1. **Visit Homepage** - `http://localhost:8000`
2. **Click "Order Joki"** - Or go to `/add-joki`
3. **Register/Login** - Enter nama dan nomor WhatsApp
4. **Fill Order Form** - Pilih matkul, set deadline, deskripsi, upload file
5. **Submit Order** - Review dan submit
6. **Order Success** - Konfirmasi dan dapat nomor order

### Admin Flow
1. **Login** - `http://localhost:8000/admin/login`
   - Nomor: `081568389940`
   - Password: `anggun123`
2. **Dashboard** - Lihat statistics dan daftar orders
3. **Manage Orders** - Update status, download files, lihat detail
4. **Logout** - Klik tombol logout

---

## 📁 Project Structure

```
jokiin/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── AdminController.php       # Admin dashboard & auth
│   │       ├── JokiController.php        # Order management
│   │       └── UserController.php        # User registration
│   └── Models/
│       ├── Admin.php                     # Admin model
│       ├── Joki.php                      # Order model
│       ├── Matkul.php                    # Subject model
│       └── User.php                      # User model
├── database/
│   ├── migrations/                       # Database migrations
│   └── seeders/                          # Database seeders
├── resources/
│   ├── js/
│   │   ├── components/
│   │   │   ├── ui/                       # Shadcn UI components
│   │   │   ├── Navbar.tsx                # Navigation
│   │   │   ├── Hero.tsx                  # Hero section
│   │   │   ├── CTA.tsx                   # Call-to-action
│   │   │   ├── formUser.tsx              # User registration form
│   │   │   └── jokiDetails.tsx           # Order form
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── login.tsx             # Admin login page
│   │   │   │   └── dashboard.tsx         # Admin dashboard
│   │   │   ├── home.tsx                  # Homepage
│   │   │   ├── add_joki.tsx              # User registration page
│   │   │   ├── details.tsx               # Order form page
│   │   │   ├── order-success.tsx         # Success page
│   │   │   └── cara-order.tsx            # How to order page
│   │   └── app.tsx                       # Inertia app entry
│   └── views/
│       └── app.blade.php                 # Main HTML template
├── routes/
│   └── web.php                           # Application routes
├── storage/
│   └── app/
│       └── public/
│           └── joki_files/               # Uploaded files
├── .env.example                          # Environment template
├── .gitignore                            # Git ignore rules
├── composer.json                         # PHP dependencies
├── package.json                          # JS dependencies
├── vite.config.ts                        # Vite configuration
├── tailwind.config.ts                    # Tailwind configuration
├── DEPLOYMENT.md                         # Deployment guide
├── ADMIN_GUIDE.md                        # Admin documentation
└── README.md                             # This file
```

---

## 🌐 Deployment

Untuk deploy ke production server, lihat dokumentasi lengkap di:

📄 **[DEPLOYMENT.md](DEPLOYMENT.md)**

Quick steps:
```bash
# Clone & install
git clone https://github.com/Rofiq02bae/jokiin.git
cd jokiin/jokiin
composer install --no-dev --optimize-autoloader
npm ci && npm run build

# Setup
cp .env.example .env
php artisan key:generate
php artisan migrate --force
php artisan storage:link

# Optimize
php artisan optimize
```

---

## 🔧 Configuration

### Environment Variables
Key variables in `.env`:

```env
APP_NAME="Jokiin"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=jokiin_db
DB_USERNAME=jokiin_user
DB_PASSWORD=secure_password

SESSION_DRIVER=database
CACHE_DRIVER=file
FILESYSTEM_DISK=public
```

### Admin Credentials
Default admin (dapat diubah di `AdminSeeder.php`):
- **Nama:** Anggun
- **Nomor:** 081568389940
- **Password:** anggun123

---

## 🧪 Testing

```bash
# Run PHP tests (if available)
php artisan test

# Run migrations in testing environment
php artisan migrate --env=testing

# Seed test data
php artisan db:seed --env=testing
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Rofiq02bae** - [GitHub](https://github.com/Rofiq02bae)

---

## 🙏 Acknowledgments

- Laravel Framework
- React & Inertia.js
- Tailwind CSS
- Shadcn UI
- All contributors and supporters

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- **GitHub Issues:** [Open an issue](https://github.com/Rofiq02bae/jokiin/issues)
- **Email:** [Your email]
- **WhatsApp:** Admin support

---

## 🗺️ Roadmap

- [ ] Implement Laravel Sanctum authentication
- [ ] Add payment gateway integration
- [ ] Email notifications for orders
- [ ] Real-time status updates (Pusher/Broadcasting)
- [ ] User dashboard untuk tracking orders
- [ ] Rating & review system
- [ ] Multi-admin support
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)

---

**Made with ❤️ using Laravel + React**
