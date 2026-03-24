// Database Models
export interface Location {
  id: string;
  name: string;
  slug: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  imageUrl?: string;
  description?: string;
  operatingHours?: Record<string, string>;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Specialty {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
  orderIndex: number;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DoctorGender = 'male' | 'female' | 'other';

export interface DoctorEducation {
  degree: string;
  institution: string;
  year: number;
}

export interface DoctorAvailability {
  [day: string]: {
    startTime: string;
    endTime: string;
    available: boolean;
  };
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  email?: string;
  phone?: string;
  bio?: string;
  imageUrl?: string;
  gender?: DoctorGender;
  registrationNumber?: string;
  licenseNumber?: string;
  education?: DoctorEducation[];
  experienceYears: number;
  consultationFee?: number;
  locationId?: string;
  location?: Location;
  availability?: DoctorAvailability;
  isActive: boolean;
  isFeatured: boolean;
  specialties?: Specialty[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DoctorSpecialty {
  id: string;
  doctorId: string;
  specialtyId: string;
  isPrimary: boolean;
  createdAt: Date;
}

export interface HealthPackage {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  price: number;
  discountedPrice?: number;
  tests?: string[];
  duration?: string;
  status: ContentStatus;
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientAge?: number;
  doctorId?: string;
  specialtyId?: string;
  locationId?: string;
  appointmentDate: Date;
  appointmentTime: string;
  reasonForVisit?: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  queryType?: string;
  isRead: boolean;
  response?: string;
  respondedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  authorId?: string;
  category?: string;
  tags: string[];
  status: ContentStatus;
  viewCount: number;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PatientStory {
  id: string;
  title: string;
  slug: string;
  story: string;
  patientName: string;
  condition?: string;
  doctorId?: string;
  imageUrl?: string;
  rating: number;
  status: ContentStatus;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  buttonText?: string;
  buttonUrl?: string;
  bannerType?: string;
  orderIndex: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ContentStatus = 'draft' | 'published' | 'archived';

export interface Page {
  id: string;
  title: string;
  slug: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  status: ContentStatus;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SEOMeta {
  id: string;
  pageType: string;
  pageId?: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'doctor' | 'patient';

export interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  fullName?: string;
  role: UserRole;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageMetadata {
  id: string;
  url: string;
  altText?: string;
  sourceName?: string;
  category?: string;
  entityType?: string;
  entityId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
