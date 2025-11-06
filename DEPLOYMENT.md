# 🚀 Deployment Guide - Jokiin

Panduan lengkap untuk deploy aplikasi Jokiin ke server production.

---

## 📋 Prerequisites

### Server Requirements
- **PHP:** >= 8.2
- **Composer:** Latest version
- **Node.js:** >= 18.x
- **NPM:** >= 9.x
- **Database:** MySQL 8.0+ / PostgreSQL 13+ / SQLite 3.x
- **Web Server:** Apache / Nginx
- **SSL Certificate:** Recommended (Let's Encrypt)

### PHP Extensions Required
```bash
php -m | grep -E 'pdo|mbstring|tokenizer|xml|ctype|json|bcmath|fileinfo|openssl'
```

Pastikan extensions berikut ter-install:
- PDO
- mbstring
- tokenizer
- XML
- ctype
- JSON
- BCMath
- fileinfo
- OpenSSL

---

## 📦 1. Clone Repository

```bash
# Clone dari GitHub
git clone https://github.com/Rofiq02bae/jokiin.git
cd jokiin

# Atau gunakan branch tertentu
git clone -b dev-react https://github.com/Rofiq02bae/jokiin.git
cd jokiin
```

---

## 🔧 2. Install Dependencies

### Install PHP Dependencies
```bash
composer install --optimize-autoloader --no-dev
```

**Penjelasan flags:**
- `--optimize-autoloader`: Optimize autoloader untuk production
- `--no-dev`: Tidak install dev dependencies (testing, debugging)

### Install JavaScript Dependencies
```bash
npm install
# atau
npm ci  # Lebih cepat dan konsisten untuk production
```

---

## ⚙️ 3. Environment Configuration

### Copy Environment File
```bash
cp .env.example .env
```

### Generate Application Key
```bash
php artisan key:generate
```

### Edit .env File
```bash
nano .env
# atau
vim .env
```

**Konfigurasi Penting:**

```env
# Application
APP_NAME="Jokiin"
APP_ENV=production
APP_KEY=base64:xxxxx  # Auto-generated
APP_DEBUG=false  # PENTING: false di production!
APP_URL=https://yourdomain.com

# Database (MySQL Example)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jokiin_db
DB_USERNAME=jokiin_user
DB_PASSWORD=your_secure_password

# Session & Cache
SESSION_DRIVER=database
CACHE_DRIVER=file

# Mail (Optional - untuk notifikasi)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"

# Filesystem
FILESYSTEM_DISK=public
```

---

## 🗄️ 4. Database Setup

### Buat Database
```bash
# MySQL
mysql -u root -p
CREATE DATABASE jokiin_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'jokiin_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON jokiin_db.* TO 'jokiin_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# PostgreSQL
psql -U postgres
CREATE DATABASE jokiin_db;
CREATE USER jokiin_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE jokiin_db TO jokiin_user;
\q
```

### Run Migrations
```bash
php artisan migrate --force
```

### Seed Database (Optional - untuk data awal)
```bash
# Seed mata kuliah
php artisan db:seed --class=MatkulSeeder

# Seed admin Anggun
php artisan db:seed --class=AdminSeeder

# Atau seed semua
php artisan db:seed --force
```

---

## 🏗️ 5. Build Frontend Assets

### Build untuk Production
```bash
npm run build
```

File hasil build akan ada di `/public/build/`

---

## 📁 6. Storage & Permissions

### Create Storage Link
```bash
php artisan storage:link
```

### Set Correct Permissions
```bash
# Untuk Ubuntu/Debian
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache

# Untuk CentOS/RHEL
sudo chown -R apache:apache storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache

# Atau dengan user spesifik
sudo chown -R $USER:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

### Create Required Directories
```bash
mkdir -p storage/app/public/joki_files
chmod 775 storage/app/public/joki_files
```

---

## 🌐 7. Web Server Configuration

### Apache (.htaccess)

File `.htaccess` sudah disediakan di `/public/.htaccess`

**Virtual Host Configuration:**
```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    DocumentRoot /var/www/jokiin/public

    <Directory /var/www/jokiin/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/jokiin-error.log
    CustomLog ${APACHE_LOG_DIR}/jokiin-access.log combined
</VirtualHost>
```

**Enable mod_rewrite:**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### Nginx

**Configuration File:** `/etc/nginx/sites-available/jokiin`
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/jokiin/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

**Enable Site:**
```bash
sudo ln -s /etc/nginx/sites-available/jokiin /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 8. SSL Certificate (HTTPS)

### Using Certbot (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx  # Nginx
sudo apt install certbot python3-certbot-apache # Apache

# Generate Certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com  # Nginx
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com # Apache

# Auto-renewal test
sudo certbot renew --dry-run
```

---

## 🚀 9. Optimization for Production

### Clear & Cache Configs
```bash
# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Cache for production
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Optimize Composer Autoloader
```bash
composer dump-autoload --optimize --classmap-authoritative
```

### Optimize Laravel
```bash
php artisan optimize
```

---

## 📊 10. Queue & Scheduler (Optional)

### Setup Queue Worker (Systemd)

**File:** `/etc/systemd/system/jokiin-worker.service`
```ini
[Unit]
Description=Jokiin Queue Worker
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/jokiin
ExecStart=/usr/bin/php /var/www/jokiin/artisan queue:work --sleep=3 --tries=3 --max-time=3600
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Enable & Start:**
```bash
sudo systemctl enable jokiin-worker
sudo systemctl start jokiin-worker
sudo systemctl status jokiin-worker
```

### Setup Cron (Scheduler)
```bash
crontab -e
```

Add line:
```cron
* * * * * cd /var/www/jokiin && php artisan schedule:run >> /dev/null 2>&1
```

---

## 🔍 11. Verification & Testing

### Check Application Status
```bash
php artisan about
```

### Test Routes
```bash
php artisan route:list
```

### Check Permissions
```bash
ls -la storage/
ls -la bootstrap/cache/
```

### Access Application
```
http://yourdomain.com
http://yourdomain.com/admin/login
```

### Test Admin Login
- URL: `https://yourdomain.com/admin/login`
- Nomor: `081568389940`
- Password: `anggun123`

---

## 🛠️ 12. Maintenance Mode

### Enable Maintenance
```bash
php artisan down --secret="your-secret-token"
```

Access during maintenance:
```
https://yourdomain.com/your-secret-token
```

### Disable Maintenance
```bash
php artisan up
```

---

## 🔄 13. Update/Deployment Process

### Quick Update Script
Create file: `/var/www/jokiin/deploy.sh`
```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Install/Update dependencies
composer install --optimize-autoloader --no-dev
npm ci
npm run build

# Run migrations
php artisan migrate --force

# Clear and cache
php artisan optimize:clear
php artisan optimize

# Restart services
sudo systemctl restart php8.2-fpm
sudo systemctl reload nginx

echo "✅ Deployment completed!"
```

Make executable:
```bash
chmod +x deploy.sh
```

Run:
```bash
./deploy.sh
```

---

## 🐛 14. Troubleshooting

### Permission Issues
```bash
sudo chown -R www-data:www-data /var/www/jokiin
sudo chmod -R 755 /var/www/jokiin
sudo chmod -R 775 storage bootstrap/cache
```

### 500 Internal Server Error
```bash
# Check logs
tail -f storage/logs/laravel.log
tail -f /var/log/nginx/error.log  # Nginx
tail -f /var/log/apache2/error.log # Apache

# Enable debug temporarily
APP_DEBUG=true php artisan serve
```

### Database Connection Failed
```bash
# Test connection
php artisan tinker
>>> DB::connection()->getPdo();
```

### File Upload Issues
```bash
# Check upload limits
php -i | grep upload_max_filesize
php -i | grep post_max_size

# Edit php.ini if needed
upload_max_filesize = 20M
post_max_size = 20M
```

---

## 📚 15. Backup Strategy

### Database Backup
```bash
# MySQL
mysqldump -u jokiin_user -p jokiin_db > backup_$(date +%Y%m%d).sql

# PostgreSQL
pg_dump -U jokiin_user jokiin_db > backup_$(date +%Y%m%d).sql
```

### Files Backup
```bash
tar -czf jokiin_files_$(date +%Y%m%d).tar.gz storage/app/public/joki_files/
```

### Automated Backup Script
```bash
#!/bin/bash
BACKUP_DIR="/backups/jokiin"
DATE=$(date +%Y%m%d_%H%M%S)

# Database
mysqldump -u user -p jokiin_db > $BACKUP_DIR/db_$DATE.sql

# Files
tar -czf $BACKUP_DIR/files_$DATE.tar.gz storage/app/public/

# Keep only last 7 days
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

---

## ✅ Deployment Checklist

- [ ] Server requirements met (PHP, Node, Database)
- [ ] Repository cloned
- [ ] Dependencies installed (Composer + NPM)
- [ ] `.env` configured correctly
- [ ] `APP_DEBUG=false` in production
- [ ] Database created and migrated
- [ ] Admin seeded (Anggun)
- [ ] Frontend built (`npm run build`)
- [ ] Storage linked (`php artisan storage:link`)
- [ ] Permissions set correctly
- [ ] Web server configured (Apache/Nginx)
- [ ] SSL certificate installed
- [ ] Configs cached
- [ ] Application tested and accessible
- [ ] Backup strategy implemented
- [ ] Monitoring setup (optional)

---

## 🎯 Quick Commands Reference

```bash
# Fresh Install
composer install --no-dev --optimize-autoloader
npm ci && npm run build
cp .env.example .env
php artisan key:generate
php artisan migrate --force
php artisan db:seed --class=AdminSeeder
php artisan storage:link
php artisan optimize

# Update/Deploy
git pull
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan migrate --force
php artisan optimize:clear
php artisan optimize

# Maintenance
php artisan down --secret="token"
php artisan up

# Logs
tail -f storage/logs/laravel.log
```

---

## 📞 Support

Jika ada masalah saat deployment, check:
1. Laravel logs: `storage/logs/laravel.log`
2. Web server logs (Nginx/Apache)
3. PHP error logs
4. Database connection

**Good luck with your deployment! 🚀**
