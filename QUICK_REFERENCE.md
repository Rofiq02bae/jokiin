# 📦 Jokiin - Quick Reference

Quick commands and information for developers.

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Rofiq02bae/jokiin.git
cd jokiin/jokiin

# Install
composer install
npm install

# Setup
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed --class=AdminSeeder
php artisan storage:link

# Run
php artisan serve  # http://localhost:8000
npm run dev        # Vite HMR
```

---

## 📂 Important Files

| File | Description |
|------|-------------|
| `routes/web.php` | Application routes |
| `app/Http/Controllers/` | Controllers |
| `app/Models/` | Database models |
| `resources/js/pages/` | React pages |
| `resources/js/components/` | React components |
| `database/migrations/` | Database migrations |
| `database/seeders/` | Database seeders |
| `.env` | Environment config |

---

## 🛠️ Common Commands

### Laravel
```bash
# Artisan commands
php artisan serve              # Start server
php artisan migrate            # Run migrations
php artisan migrate:fresh      # Fresh migration
php artisan db:seed            # Run seeders
php artisan storage:link       # Create storage link
php artisan route:list         # List all routes
php artisan make:controller    # Create controller
php artisan make:model         # Create model
php artisan make:migration     # Create migration

# Cache
php artisan cache:clear        # Clear cache
php artisan config:clear       # Clear config cache
php artisan route:clear        # Clear route cache
php artisan view:clear         # Clear view cache
php artisan optimize           # Optimize for production
php artisan optimize:clear     # Clear all optimizations
```

### NPM
```bash
npm install                    # Install dependencies
npm run dev                    # Start Vite dev server
npm run build                  # Build for production
npm run lint                   # Lint code
```

### Composer
```bash
composer install               # Install dependencies
composer update                # Update dependencies
composer dump-autoload         # Regenerate autoloader
```

---

## 🗃️ Database

### Models
- **User** - User registration (nama, nomor)
- **Joki** - Order joki (matkul, deadline, deskripsi, file)
- **Matkul** - Mata kuliah list
- **Admin** - Admin authentication

### Relationships
```
User (1) ──── (n) Joki
Matkul (1) ── (n) Joki
```

### Seeders
```bash
php artisan db:seed --class=MatkulSeeder   # Seed subjects
php artisan db:seed --class=AdminSeeder    # Seed admin
php artisan db:seed --class=UserSeeder     # Seed users (dev)
php artisan db:seed --class=JokiSeeder     # Seed orders (dev)
```

---

## 🌐 Routes

| Method | URL | Page | Description |
|--------|-----|------|-------------|
| GET | `/` | home | Homepage |
| GET | `/add-joki` | add_joki | User registration |
| POST | `/users` | - | Store user |
| GET | `/joki/create` | details | Order form |
| POST | `/jokis` | - | Store order |
| GET | `/order-success` | order-success | Success page |
| GET | `/cara-order` | cara-order | How to order |
| GET | `/admin/login` | admin/login | Admin login |
| POST | `/admin/login` | - | Process login |
| GET | `/admin/dashboard` | admin/dashboard | Admin dashboard |
| POST | `/admin/joki/{id}/update-status` | - | Update status |
| GET | `/admin/joki/{id}/download` | - | Download file |
| POST | `/admin/logout` | - | Logout admin |

---

## 🔐 Admin Access

```
URL: http://localhost:8000/admin/login
Nomor: 081568389940
Password: anggun123
```

---

## 📁 Directory Structure

```
jokiin/
├── app/
│   ├── Http/Controllers/
│   │   ├── AdminController.php
│   │   ├── JokiController.php
│   │   └── UserController.php
│   └── Models/
│       ├── Admin.php
│       ├── Joki.php
│       ├── Matkul.php
│       └── User.php
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── js/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn components
│   │   │   ├── Navbar.tsx
│   │   │   ├── formUser.tsx
│   │   │   └── jokiDetails.tsx
│   │   └── pages/
│   │       ├── admin/
│   │       │   ├── login.tsx
│   │       │   └── dashboard.tsx
│   │       ├── home.tsx
│   │       ├── add_joki.tsx
│   │       ├── details.tsx
│   │       ├── order-success.tsx
│   │       └── cara-order.tsx
│   └── views/
│       └── app.blade.php
├── routes/
│   └── web.php
└── storage/
    └── app/public/
        └── joki_files/        # User uploads
```

---

## 🎨 Tech Stack

- **Backend:** Laravel 12 + PHP 8.2
- **Frontend:** React 18 + TypeScript
- **Routing:** Inertia.js 2.0
- **Build:** Vite 7
- **CSS:** Tailwind CSS 4
- **UI:** Shadcn UI
- **Forms:** React Hook Form
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

---

## 🔧 Environment Variables

```env
APP_NAME="Jokiin"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite

SESSION_DRIVER=database
CACHE_STORE=database
FILESYSTEM_DISK=public

ADMIN_WHATSAPP=6281234567890
MAX_FILE_SIZE=10240
DEFAULT_ORDER_PRICE=50000
```

---

## 📚 Documentation

- **[README.md](README.md)** - Main documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide
- **[ADMIN_GUIDE.md](ADMIN_GUIDE.md)** - Admin features
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guide

---

## 🐛 Debugging

### Check Logs
```bash
tail -f storage/logs/laravel.log
```

### Enable Debug
```env
APP_DEBUG=true
LOG_LEVEL=debug
```

### Clear Everything
```bash
php artisan optimize:clear
composer dump-autoload
npm run build
```

---

## 📦 Deployment

### Quick Deploy
```bash
# On server
git pull
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan migrate --force
php artisan optimize
sudo systemctl restart php8.2-fpm
```

### Production Checklist
- [ ] `APP_DEBUG=false`
- [ ] `APP_ENV=production`
- [ ] Strong `DB_PASSWORD`
- [ ] SSL certificate installed
- [ ] `php artisan optimize`
- [ ] Permissions set correctly
- [ ] Backup strategy implemented

---

## 🆘 Troubleshooting

### Permission Denied
```bash
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

### 500 Error
```bash
tail -f storage/logs/laravel.log
```

### Database Connection Failed
```bash
php artisan tinker
>>> DB::connection()->getPdo();
```

### File Upload Not Working
```bash
php artisan storage:link
chmod 775 storage/app/public/joki_files
```

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/Rofiq02bae/jokiin/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Rofiq02bae/jokiin/discussions)

---

**Happy Coding! 🚀**
