# 🤝 Contributing to Jokiin

Terima kasih atas minat Anda untuk berkontribusi pada project Jokiin! Berikut adalah panduan untuk memulai.

---

## 📋 Code of Conduct

Project ini mengikuti [Code of Conduct](CODE_OF_CONDUCT.md). Dengan berpartisipasi, Anda diharapkan untuk mematuhi kode etik ini.

---

## 🚀 Getting Started

### Prerequisites
- PHP >= 8.2
- Composer >= 2.7
- Node.js >= 18.x
- NPM >= 9.x
- Git

### Setup Development Environment

1. **Fork repository**
   ```bash
   # Fork via GitHub UI, kemudian clone fork Anda
   git clone https://github.com/YOUR_USERNAME/jokiin.git
   cd jokiin/jokiin
   ```

2. **Install dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan db:seed
   ```

4. **Run development server**
   ```bash
   # Terminal 1: Laravel
   php artisan serve
   
   # Terminal 2: Vite
   npm run dev
   ```

---

## 🌿 Branch Strategy

- `main` - Production-ready code
- `dev-react` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### Creating a Branch

```bash
# Feature branch
git checkout -b feature/nama-fitur

# Bugfix branch
git checkout -b bugfix/nama-bug

# Hotfix branch
git checkout -b hotfix/nama-hotfix
```

---

## 📝 Commit Message Guidelines

Gunakan conventional commits format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no code change)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(order): add file upload functionality"
git commit -m "fix(admin): resolve dashboard loading issue"
git commit -m "docs(readme): update installation instructions"
```

---

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git checkout dev-react
   git pull upstream dev-react
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/awesome-feature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes**
   ```bash
   # Backend tests
   php artisan test
   
   # Frontend build
   npm run build
   
   # Check for errors
   npm run lint
   ```

5. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add awesome feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/awesome-feature
   ```

7. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in PR template
   - Submit for review

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test the changes

## Checklist
- [ ] Code follows project style
- [ ] Comments added where needed
- [ ] Documentation updated
- [ ] Tests pass
- [ ] No breaking changes
```

---

## 💻 Coding Standards

### PHP (Laravel)
- Follow [PSR-12](https://www.php-fig.org/psr/psr-12/) coding standard
- Use type hints
- Write descriptive variable names
- Add PHPDoc comments for classes and methods

```php
/**
 * Store a new joki order.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Inertia\Response
 */
public function store(Request $request): Response
{
    $validated = $request->validate([
        'id_matkul' => 'required|integer|exists:matkuls,id',
        'deadline' => 'required|date',
        'deskripsi' => 'required|string',
    ]);
    
    // Logic here
}
```

### TypeScript/React
- Use functional components
- Use TypeScript types/interfaces
- Follow React best practices
- Use proper component naming

```typescript
type Props = {
    user: {
        id: number;
        nama: string;
        nomor: string;
    };
};

export function Component({ user }: Props) {
    // Component logic
}
```

### CSS/Tailwind
- Use Tailwind utility classes
- Follow responsive-first approach
- Avoid inline styles when possible

```tsx
<div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-gray-900">
        Title
    </h1>
</div>
```

---

## 🧪 Testing

### Backend Tests
```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/OrderTest.php

# Run with coverage
php artisan test --coverage
```

### Frontend
```bash
# Lint
npm run lint

# Type check
npm run type-check

# Build
npm run build
```

---

## 📚 Documentation

Update documentation when:
- Adding new features
- Changing APIs
- Modifying configuration
- Adding dependencies

Files to update:
- `README.md` - Main documentation
- `DEPLOYMENT.md` - Deployment guide
- `ADMIN_GUIDE.md` - Admin features
- Code comments

---

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues
2. Search closed issues
3. Try latest version
4. Verify it's reproducible

### Bug Report Template
```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g. Ubuntu 22.04]
- PHP Version: [e.g. 8.2]
- Laravel Version: [e.g. 12.0]
- Browser: [e.g. Chrome 120]

**Additional context**
Any other information
```

---

## 💡 Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
Clear description

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Other solutions considered

**Additional context**
Mockups, examples, etc.
```

---

## 🎨 Design Guidelines

- Follow existing UI/UX patterns
- Use Shadcn UI components when possible
- Maintain consistent spacing and typography
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

---

## ✅ Review Checklist

Before submitting PR:
- [ ] Code is self-documenting or has comments
- [ ] No console.log() or dd() left in code
- [ ] Variables and functions have descriptive names
- [ ] Code follows project structure
- [ ] No hardcoded values (use config/env)
- [ ] Error handling implemented
- [ ] Responsive design tested
- [ ] Browser compatibility checked
- [ ] No security vulnerabilities
- [ ] Database migrations work correctly
- [ ] Seeders updated if needed

---

## 📞 Getting Help

Stuck? Need help?
- Check [Documentation](README.md)
- Search [Issues](https://github.com/Rofiq02bae/jokiin/issues)
- Ask in [Discussions](https://github.com/Rofiq02bae/jokiin/discussions)
- Contact maintainers

---

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🎉**
