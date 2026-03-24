# MediCare Setup & Installation Guide

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: 18.0 or higher ([Download](https://nodejs.org/))
- **PostgreSQL**: 12 or higher ([Download](https://www.postgresql.org/download/))
- **npm** or **yarn** (comes with Node.js)
- **Git** (optional, for version control)

### Step 1: Project Setup

```bash
# Navigate to the project directory
cd /home/kali/Documents/a

# Install dependencies
npm install

# This will install all packages from package.json:
# - next, react, react-dom
# - typescript, tailwindcss, postcss
# - pg (PostgreSQL driver)
# - framer-motion, zod, sharp
# - bcryptjs, jsonwebtoken
# - and other utilities
```

### Step 2: Database Configuration

#### Create PostgreSQL Database

```bash
# Using psql (PostgreSQL command-line tool)
psql -U postgres -c "CREATE DATABASE healthcare_db;"

# Or using pgAdmin (GUI tool) - Create new database named "healthcare_db"
```

#### Run Database Schema

```bash
# Apply the database schema (creates all tables)
psql -U postgres -d healthcare_db -f database/schema.sql
```

**What this does:**
- Creates all 13 tables (locations, doctors, specialties, etc.)
- Sets up proper foreign keys and relationships
- Creates automatic timestamp triggers
- Sets up indexes for performance

#### Verify Database

```bash
# Connect to the database to verify
psql -U postgres -d healthcare_db

# Inside psql, run:
\dt  # Lists all tables (should show 14 tables)
\q   # Exit
```

### Step 3: Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env.local
```

**Edit `.env.local` with your settings:**

```env
# Database Connection
DATABASE_URL=postgresql://postgres:password@localhost:5432/healthcare_db
# Replace 'password' with your PostgreSQL password

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Authentication (Change these in production!)
ADMIN_JWT_SECRET=your-super-secret-jwt-key-min-32-chars
ADMIN_SESSION_SECRET=your-session-secret-min-32-chars

# Image API Keys (Optional - for additional image sources)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your-unsplash-key
NEXT_PUBLIC_PEXELS_API_KEY=your-pexels-key
NEXT_PUBLIC_PIXABAY_API_KEY=your-pixabay-key

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Rate Limiting
RATE_LIMIT_WINDOW=900000    # 15 minutes in milliseconds
RATE_LIMIT_MAX_REQUESTS=100

# Environment
NODE_ENV=development
```

### Step 4: Seed Sample Data (Optional)

```bash
# Create sample data for development/testing
npm run db:seed

# This creates:
# - 2 sample locations
# - 3 specialties
# - 2 sample doctors
# - 2 health packages
```

### Step 5: Start Development Server

```bash
# Start the Next.js development server
npm run dev

# The server will start at http://localhost:3000
# The console will show:
# - ▲ Next.js (development mode)
# - Ready in XXms
# - Local: http://localhost:3000
```

**Press `Ctrl + C` to stop the server**

### Step 6: Access the Application

- **Homepage**: [http://localhost:3000](http://localhost:3000)
- **Doctors**: [http://localhost:3000/doctors](http://localhost:3000/doctors)
- **Specialties**: [http://localhost:3000/specialties](http://localhost:3000/specialties)
- **Health Packages**: [http://localhost:3000/health-packages](http://localhost:3000/health-packages)
- **Book Appointment**: [http://localhost:3000/appointment](http://localhost:3000/appointment)
- **Contact**: [http://localhost:3000/contact](http://localhost:3000/contact)
- **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

## 🔧 Development Workflow

### Building for Production

```bash
# Build the Next.js application
npm run build

# This creates an optimized production build in the `.next` folder
# Shows build statistics and potential optimizations
```

### Running Production Build

```bash
# Start the production server
npm run start

# Server runs on http://localhost:3000
# This uses the optimized build created above
```

### Type Checking

```bash
# Run TypeScript type checker
npm run type-check

# Shows any TypeScript compilation errors
# Safe to deploy only if this passes
```

### Linting

```bash
# Run ESLint
npm run lint

# Shows code quality issues
# Configuration is in .eslintrc.json
```

## 📁 Project File Structure

```
healthcare-website/
│
├── src/                          # Source code
│   ├── app/                     # Next.js app directory (Pages & API routes)
│   │   ├── layout.tsx           # Root layout wrapper
│   │   ├── page.tsx             # Home page
│   │   ├── api/                 # API routes
│   │   │   ├── appointments/    # Appointment endpoints
│   │   │   ├── contact/         # Contact form endpoint
│   │   │   ├── doctors/         # Doctors listing
│   │   │   ├── specialties/     # Specialties listing
│   │   │   └── health-packages/ # Health packages endpoint
│   │   ├── doctors/             # Doctor pages
│   │   ├── specialties/         # Specialty pages
│   │   ├── health-packages/     # Package listing & details
│   │   ├── appointment/         # Appointment booking page
│   │   ├── contact/             # Contact form page
│   │   ├── blog/                # Blog listing
│   │   ├── about/               # About page
│   │   ├── locations/           # Locations page
│   │   ├── corporate-services/  # Corporate services page
│   │   ├── patient-guide/       # Patient guide
│   │   ├── privacy-policy/      # Privacy policy
│   │   └── admin/               # Admin dashboard
│   │
│   ├── components/              # Reusable React components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Hero.tsx             # Hero banner component
│   │   ├── Card.tsx             # Generic card component
│   │   ├── DoctorCard.tsx       # Doctor card component
│   │   └── Section.tsx          # Section wrapper component
│   │
│   ├── lib/                     # Library & utility functions
│   │   ├── db.ts                # PostgreSQL database connection
│   │   ├── queries.ts           # Database query functions
│   │   └── utils.ts             # Helper utilities (hashing, validation, etc.)
│   │
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # All TypeScript interfaces
│   │
│   └── styles/                  # Global styles
│       └── globals.css          # Tailwind CSS global styles
│
├── database/                    # Database files
│   ├── schema.sql               # PostgreSQL database schema
│   └── seed.ts                  # Sample data for development
│
├── public/                      # Static assets (images, fonts, etc.)
│
├── Configuration Files
│   ├── package.json             # NPM dependencies & scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── next.config.js           # Next.js configuration
│   ├── .env.example             # Environment variables template
│   ├── .gitignore               # Git ignore rules
│   └── .eslintrc.json           # ESLint configuration
│
└── Documentation
    ├── README.md                # Project overview
    ├── SETUP_GUIDE.md          # This file
    └── DATABASE_SCHEMA.md      # Database documentation
```

## 🗄️ Database Schema Overview

### Key Tables

**locations**
- Stores hospital/clinic locations
- Fields: name, slug, city, address, phone, email, coordinates, hours

**doctors**
- Stores doctor profiles
- Links to locations and specialties
- Fields: name, email, phone, bio, image, experience, fee

**specialties**
- Medical specialties (Cardiology, Neurology, etc.)
- Fields: name, slug, description, image, icon

**doctor_specialties**
- Junction table linking doctors to multiple specialties

**appointments**
- Patient appointments
- Fields: patient details, doctor, date, time, status

**contact_queries**
- Contact form submissions
- Fields: name, email, message, status

**blog_posts, patient_stories, health_packages, banners, pages, seo_meta, admin_users**
- Additional content and management tables

## 🖼️ Image Sources

All images use royalty-free, licensed sources:

### Configured Sources (Next.js)

Add to `next.config.js` remotePatterns:
- `images.unsplash.com` - Professional photos
- `images.pexels.com` - Free stock photos
- `cdn.pixabay.com` - CC0 licensed images
- `pixabay.com` - Pixabay CDN

### Image Integration

```typescript
// Example: Using online images in components
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/photo-xyz"
  alt="Doctor portrait"
  width={400}
  height={500}
/>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to GitHub (optional)
# - Set environment variables in dashboard
# - Database URL should point to production PostgreSQL
```

### Deploy to Other Platforms

**Heroku:**
```bash
heroku login
heroku create your-app-name
git push heroku main
```

**AWS/DigitalOcean/Linode:**
1. Build: `npm run build`
2. Start: `npm start`
3. Set environment variables
4. Configure PostgreSQL connection

## 🧪 Testing the APIs

### Using cURL

**Test Appointment API:**
```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patientName": "John Doe",
    "patientEmail": "john@example.com",
    "patientPhone": "+880 1234 567890",
    "appointmentDate": "2024-04-20",
    "appointmentTime": "14:00",
    "specialtyId": "cardiology"
  }'
```

**Test Contact API:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Inquiry",
    "message": "I have a question about your services"
  }'
```

### Using Postman

1. Create a new POST request
2. URL: `http://localhost:3000/api/appointments`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON): Copy the above examples
5. Click "Send"

## 🔍 Troubleshooting

### Issue: "Cannot find module 'react'"
**Solution:** Run `npm install` - dependencies aren't installed yet

### Issue: "connection refused" (PostgreSQL)
**Solution:**
```bash
# Start PostgreSQL service
# macOS: brew services start postgresql
# Linux: sudo systemctl start postgresql
# Windows: Services > PostgreSQL > Start
```

### Issue: "database healthcare_db does not exist"
**Solution:**
```bash
psql -U postgres -c "CREATE DATABASE healthcare_db;"
```

### Issue: "Port 3000 is already in use"
**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Images not loading
**Solution:** 
- Check `.env.local` has correct remote image domains
- Verify Next.js config has proper `remotePatterns`
- Check browser console for specific image URLs

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## ✅ Pre-Deployment Checklist

- [ ] Install all dependencies: `npm install`
- [ ] Set up PostgreSQL database
- [ ] Run schema: `psql -d healthcare_db -f database/schema.sql`
- [ ] Configure `.env.local` file
- [ ] Test locally: `npm run dev`
- [ ] Check all pages load correctly
- [ ] Verify API endpoints work
- [ ] Run type check: `npm run type-check`
- [ ] Build for production: `npm run build`
- [ ] No TypeScript errors
- [ ] Set environment variables on hosting platform
- [ ] Database URL points to production database
- [ ] Deploy!

## 📞 Support & Contact

For issues or questions:
- Email: support@medicare.com
- Phone: +880 1234 567890
- GitHub Issues: (if applicable)

---

**Happy deploying! 🚀**
