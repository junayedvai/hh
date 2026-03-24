# MediCare - Premium Healthcare Website

A production-ready, enterprise-grade healthcare website built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.

## 🏥 Project Overview

MediCare is a comprehensive healthcare platform that provides:
- **Doctor Management**: Browse and book appointments with experienced doctors
- **Specialty Management**: Browse healthcare specialties and departments
- **Health Packages**: Pre-defined health screening packages
- **Appointment Booking**: Easy online appointment scheduling
- **Contact & Queries**: Direct communication with healthcare providers
- **Blog & News**: Health articles and medical updates
- **Admin CMS**: Complete backend management system
- **Online Image Integration**: All images sourced from Unsplash, Pexels, and Pixabay

## 🎯 Features

### Frontend
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ SEO optimized pages
- ✅ Fast performance (Next.js Image optimization)
- ✅ Smooth animations (Framer Motion)
- ✅ Accessibility support
- ✅ Loading and error states
- ✅ Online image integration

### Pages
- Homepage with hero banner
- Doctor directory with filters
- Specialty browsing
- Health packages catalog
- Appointment booking
- Contact form
- Blog & News section
- About Us
- Patient & Visitor Guide
- Privacy Policy
- Admin Dashboard (CMS)

### Database
- PostgreSQL with 13 core tables
- Proper relationships and constraints
- Automatic timestamps and triggers
- Image metadata tracking

### API Endpoints
- GET/POST `/api/appointments`
- GET/POST `/api/contact`
- GET `/api/doctors`
- GET `/api/specialties`
- GET `/api/health-packages`

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom built (shadcn/ui patterns)
- **Animations**: Framer Motion
- **Icons**: Emoji + Lucide React

### Backend
- **Runtime**: Node.js
- **Server**: Next.js API Routes
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Security**: bcryptjs for password hashing

### Image Sources
- **Unsplash** (images.unsplash.com)
- **Pexels** (images.pexels.com)
- **Pixabay** (cdn.pixabay.com, pixabay.com)

### Deployment
- **Frontend**: Vercel-ready
- **Backend**: Next.js API routes
- **Database**: PostgreSQL (configurable host)

## 📁 Project Structure

```
healthcare-website/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Homepage
│   │   ├── api/                      # API routes
│   │   │   ├── appointments/
│   │   │   ├── contact/
│   │   │   ├── doctors/
│   │   │   ├── specialties/
│   │   │   └── health-packages/
│   │   ├── doctors/                  # Doctor pages
│   │   ├── specialties/              # Specialty pages
│   │   ├── health-packages/          # Package pages
│   │   ├── appointment/              # Booking page
│   │   ├── contact/                  # Contact page
│   │   ├── blog/                     # Blog pages
│   │   ├── about/                    # About page
│   │   ├── patient-guide/            # Patient guide
│   │   └── privacy-policy/           # Privacy page
│   ├── components/                   # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   ├── DoctorCard.tsx
│   │   └── Section.tsx
│   ├── lib/                          # Utilities
│   │   ├── db.ts                     # Database connection
│   │   ├── queries.ts                # DB queries
│   │   └── utils.ts                  # Helper functions
│   ├── types/                        # TypeScript types
│   │   └── index.ts
│   └── styles/                       # Global styles
│       └── globals.css
├── database/                         # Database files
│   ├── schema.sql                    # Database schema
│   └── seed.ts                       # Sample data
├── public/                           # Static assets
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind config
├── next.config.js                    # Next.js config
├── postcss.config.js                 # PostCSS config
└── README.md                         # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd healthcare-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/healthcare_db
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ADMIN_JWT_SECRET=your-secret-key
   ADMIN_SESSION_SECRET=your-session-secret
   ```

4. **Setup PostgreSQL Database**
   ```bash
   createdb healthcare_db
   psql -U postgres -d healthcare_db -f database/schema.sql
   ```

5. **Seed sample data (optional)**
   ```bash
   npm run db:seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Database Schema

### Tables
- **locations**: Hospital/clinic locations
- **doctors**: Doctor profiles
- **specialties**: Medical specialties
- **doctor_specialties**: Many-to-many relationship
- **health_packages**: Health screening packages
- **appointments**: Patient appointments
- **contact_queries**: Contact form submissions
- **blog_posts**: Blog articles
- **patient_stories**: Patient testimonials
- **banners**: Hero banners and promotions
- **pages**: CMS pages
- **seo_meta**: SEO metadata
- **admin_users**: Admin user accounts
- **image_metadata**: Image tracking and sources

## 🎨 Design System

### Colors
- **Primary**: Blue (#0099ff)
- **Secondary**: Green (#22c55e)
- **Neutral**: Gray scale

### Components
- Hero banners with image overlays
- Card-based layouts
- Doctor cards with specialties
- Section wrappers
- Form components
- Navigation header/footer

### Images
All images use royalty-free sources:
- Medical professionals from Unsplash/Pexels
- Hospital facilities from Unsplash
- Healthcare concepts from Pixabay
- Testimonial photos from Pexels

## 🔐 Security Features

- ✅ Form validation (client & server)
- ✅ Rate limiting on API endpoints
- ✅ Password hashing with bcryptjs
- ✅ JWT authentication
- ✅ HTTPS headers (Security headers in next.config)
- ✅ XSS protection
- ✅ SQL injection prevention (parameterized queries)
- ✅ CORS ready

## 🔍 SEO & Accessibility

- ✅ Semantic HTML
- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Alt text for images
- ✅ Keyboard navigation support
- ✅ ARIA labels
- ✅ Mobile responsive
- ✅ Page load speed optimized

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and inputs
- Optimized images for all devices

## 🧪 API Testing

### Appointment Booking
```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patientName": "John Doe",
    "patientEmail": "john@example.com",
    "patientPhone": "+880 1234 567890",
    "appointmentDate": "2024-04-15",
    "appointmentTime": "14:00",
    "specialtyId": "cardiology"
  }'
```

### Contact Query
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

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual Deployment
1. Build the project: `npm run build`
2. Start server: `npm run start`
3. Use PM2 or similar for process management

### Environment Variables for Production
- Set all `.env` variables in your hosting platform
- Update DATABASE_URL to production PostgreSQL
- Use secure JWT secrets
- Enable HTTPS

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Static generation where possible
- ✅ Lazy loading for images
- ✅ CSS minification
- ✅ Code splitting
- ✅ Font optimization
- ✅ Database query optimization with indexes

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/name`
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support, email: support@medicare.com or call: +880 1234 567890

## 🙏 Credits

- Images from [Unsplash](https://unsplash.com/)
- Images from [Pexels](https://www.pexels.com/)
- Images from [Pixabay](https://pixabay.com/)
- UI components inspired by premium healthcare websites

---

**MediCare** - Excellence in Healthcare Technology
