# 🚀 Getting Started Guide

Welcome to the Doon International School website project! This guide will help you get up and running quickly, whether you're a new developer or experienced engineer.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** 18.x or later ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **Visual Studio Code** (recommended) ([Download](https://code.visualstudio.com/))

### Optional but Recommended
- **Yarn** package manager (`npm install -g yarn`)
- **GitHub Desktop** for easier Git management

### Verify Installation
```bash
# Check Node.js version
node --version
# Should show: v18.x.x or higher

# Check npm version
npm --version
# Should show: 8.x.x or higher

# Check Git version
git --version
# Should show: 2.x.x or higher
```

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/sharadchaturveda-coder/doon-school.git

# Navigate to the project directory
cd doon-school

# Verify you're in the right place
ls -la
# You should see: package.json, app/, components/, etc.
```

### 2. Install Dependencies

```bash
# Install all project dependencies
npm install

# If you prefer yarn:
# yarn install

# This will install:
# - Next.js (React framework)
# - TypeScript (type safety)
# - Tailwind CSS (styling)
# - Framer Motion (animations)
# - Nodemailer (email sending)
# - And many other dependencies
```

### 3. Environment Configuration

The project requires Gmail credentials for email functionality. Create your environment file:

```bash
# Copy the example environment file
cp .env.local.example .env.local

# Edit the file with your credentials
code .env.local  # or open with your preferred editor
```

**Required Environment Variables:**
```env
# Gmail SMTP Configuration (Required)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Optional: Analytics (can be added later)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

#### How to Get Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification** → **App passwords**
4. Generate a new app password for "Mail"
5. Use this password (not your regular Gmail password) in `GMAIL_APP_PASSWORD`

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# Alternative commands:
# npm start     # Production server (after build)
# npm run build # Build for production
# npm run lint  # Check code quality
```

### 5. View Your Application

Open your browser and navigate to:
- **Local Development**: [http://localhost:3000](http://localhost:3000)
- **Admin/Preview**: Check terminal for additional ports if needed

## 🏗️ Understanding the Project Structure

Let's explore the key directories and files:

### 📁 Top-Level Structure
```
doon-school/
├── app/                    # 📄 Next.js pages (App Router)
├── components/             # 🧩 Reusable React components
├── lib/                    # 🔧 Utility functions
├── data/                   # 📊 Static JSON data
├── public/                 # 🖼️ Static assets (images, fonts)
├── docs/                   # 📚 Documentation
└── styles/                 # 🎨 Additional styles
```

### 🔍 Key Directories Explained

#### `app/` - Your Pages
```
app/
├── layout.tsx           # Root layout (header, footer, metadata)
├── page.tsx             # Homepage (/)
├── about/
│   └── page.tsx         # About page (/about)
├── admissions/
│   └── page.tsx         # Admissions page (/admissions)
└── api/
    └── enquiry/
        └── route.ts     # Email API endpoint
```

#### `components/` - Building Blocks
```
components/
├── ui/                  # Basic components (Button, Input, etc.)
├── blocks/              # Complex sections (Hero, Cards, etc.)
├── sections/            # Page-specific sections
└── layout/              # Layout components (Header, Footer)
```

#### `data/` - Content Management
```
data/
├── site.json            # Site configuration (navigation, contact)
├── discover.json        # Discover page content
└── doon/
    ├── home.json        # Homepage content
    ├── about.json       # About page content
    └── facilities.json  # Facilities data
```

## 🎯 First Development Tasks

### Task 1: Explore the Homepage
1. Open `app/page.tsx`
2. See how components are imported and composed
3. Try changing some text to see live updates

### Task 2: Modify a Component
1. Open `components/ui/button.tsx`
2. Change a style property (like color)
3. See the change reflected in your browser

### Task 3: Add New Content
1. Open `data/site.json`
2. Add a new navigation item
3. See how it appears in the header

### Task 4: Test Email Functionality
1. Fill out the enquiry form on `/enquiry`
2. Check your Gmail for the notification email
3. Verify the email formatting and content

## 🔧 Development Workflow

### Daily Development Cycle
```bash
# 1. Start development server
npm run dev

# 2. Make changes to files
# 3. Check browser for updates (hot reload)

# 4. Check code quality
npm run lint

# 5. Commit your changes
git add .
git commit -m "feat: add new feature description"
git push origin main
```

### Code Quality Checks
```bash
# Run all quality checks
npm run lint          # ESLint code quality
npm run type-check    # TypeScript type checking
npm run build         # Production build test
```

## 🐛 Troubleshooting

### Common Issues

#### "Module not found" errors
- Run `npm install` to ensure all dependencies are installed
- Check that file paths in imports are correct

#### Email not sending
- Verify Gmail credentials in `.env.local`
- Ensure 2FA is enabled and App Password is correct
- Check console for error messages

#### Build failures
- Run `npm run lint` to check for code issues
- Ensure all TypeScript types are correct
- Check that all imported components exist

#### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart: npm run dev
```

### Getting Help

1. **Check Documentation**: Look in the `docs/` folder
2. **Read Code Comments**: All complex logic has inline explanations
3. **Check GitHub Issues**: Search for similar problems
4. **Ask the Team**: Contact the development team for support

## 🎓 Learning Resources

### Next.js Fundamentals
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [TypeScript with Next.js](https://nextjs.org/docs/typescript)

### React Concepts
- [React Documentation](https://react.dev/)
- [Hooks Guide](https://react.dev/learn/hooks-overview)
- [Component Patterns](https://react.dev/learn/thinking-in-react)

### Styling & Animation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 🚀 Next Steps

Once you're comfortable with the basics:

1. **Read the Architecture Guide** (`docs/architecture-overview.md`)
2. **Explore Component Patterns** (`docs/component-patterns.md`)
3. **Learn the Styling System** (`docs/styling-guide.md`)
4. **Contribute Your First Feature**

## 📞 Support

- **Documentation**: Check the `docs/` folder for detailed guides
- **Code Examples**: Look at existing components for patterns
- **Development Team**: Contact for technical support

---

**Happy coding! 🎉**

*This guide is maintained by the Doon International School development team.*</content>
