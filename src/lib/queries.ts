import { Doctor, Location, Specialty, HealthPackage, BlogPost, PatientStory, Appointment, ContactQuery } from '@/types';
import { query } from './db';

// Locations
export async function getAllLocations(): Promise<Location[]> {
  const result = await query(
    'SELECT id, name, slug, city, address, phone, email, latitude, longitude, image_url as "imageUrl", description, operating_hours as "operatingHours", is_active as "isActive", created_at as "createdAt", updated_at as "updatedAt" FROM locations WHERE is_active = true ORDER BY name'
  );
  return result.rows;
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  const result = await query(
    'SELECT id, name, slug, city, address, phone, email, latitude, longitude, image_url as "imageUrl", description, operating_hours as "operatingHours", is_active as "isActive", created_at as "createdAt", updated_at as "updatedAt" FROM locations WHERE slug = $1',
    [slug]
  );
  return result.rows[0] || null;
}

// Specialties
export async function getAllSpecialties(): Promise<Specialty[]> {
  const result = await query(
    'SELECT id, name, slug, description, image_url as "imageUrl", icon, order_index as "orderIndex", is_active as "isActive", seo_title as "seoTitle", seo_description as "seoDescription", created_at as "createdAt", updated_at as "updatedAt" FROM specialties WHERE is_active = true ORDER BY order_index'
  );
  return result.rows;
}

export async function getSpecialtyBySlug(slug: string): Promise<Specialty | null> {
  const result = await query(
    'SELECT id, name, slug, description, image_url as "imageUrl", icon, order_index as "orderIndex", is_active as "isActive", seo_title as "seoTitle", seo_description as "seoDescription", created_at as "createdAt", updated_at as "updatedAt" FROM specialties WHERE slug = $1',
    [slug]
  );
  return result.rows[0] || null;
}

// Doctors
export async function getAllDoctors(filters?: { specialtyId?: string; locationId?: string; featured?: boolean }): Promise<Doctor[]> {
  let sql = `
    SELECT DISTINCT d.id, d.first_name as "firstName", d.last_name as "lastName", d.slug, d.email, d.phone, d.bio, 
           d.image_url as "imageUrl", d.gender, d.registration_number as "registrationNumber", 
           d.license_number as "licenseNumber", d.education, d.experience_years as "experienceYears", 
           d.consultation_fee as "consultationFee", d.location_id as "locationId", d.availability, 
           d.is_active as "isActive", d.is_featured as "isFeatured", d.created_at as "createdAt", d.updated_at as "updatedAt"
    FROM doctors d
    LEFT JOIN doctor_specialties ds ON d.id = ds.doctor_id
    WHERE d.is_active = true
  `;
  const params: any[] = [];
  let paramIndex = 1;

  if (filters?.specialtyId) {
    sql += ` AND ds.specialty_id = $${paramIndex}`;
    params.push(filters.specialtyId);
    paramIndex++;
  }

  if (filters?.locationId) {
    sql += ` AND d.location_id = $${paramIndex}`;
    params.push(filters.locationId);
    paramIndex++;
  }

  if (filters?.featured) {
    sql += ` AND d.is_featured = true`;
  }

  sql += ' ORDER BY d.first_name';

  const result = await query(sql, params);
  return result.rows;
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const result = await query(
    `SELECT d.id, d.first_name as "firstName", d.last_name as "lastName", d.slug, d.email, d.phone, d.bio, 
            d.image_url as "imageUrl", d.gender, d.registration_number as "registrationNumber", 
            d.license_number as "licenseNumber", d.education, d.experience_years as "experienceYears", 
            d.consultation_fee as "consultationFee", d.location_id as "locationId", d.availability, 
            d.is_active as "isActive", d.is_featured as "isFeatured", d.created_at as "createdAt", d.updated_at as "updatedAt"
     FROM doctors d WHERE d.slug = $1 AND d.is_active = true`,
    [slug]
  );
  return result.rows[0] || null;
}

// Health Packages
export async function getAllHealthPackages(): Promise<HealthPackage[]> {
  const result = await query(
    `SELECT id, name, slug, description, image_url as "imageUrl", category, price, discounted_price as "discountedPrice", 
            tests, duration, status, order_index as "orderIndex", created_at as "createdAt", updated_at as "updatedAt"
     FROM health_packages WHERE status = 'published' ORDER BY order_index`
  );
  return result.rows;
}

export async function getHealthPackageBySlug(slug: string): Promise<HealthPackage | null> {
  const result = await query(
    `SELECT id, name, slug, description, image_url as "imageUrl", category, price, discounted_price as "discountedPrice", 
            tests, duration, status, order_index as "orderIndex", created_at as "createdAt", updated_at as "updatedAt"
     FROM health_packages WHERE slug = $1 AND status = 'published'`,
    [slug]
  );
  return result.rows[0] || null;
}

// Blog Posts
export async function getAllBlogPosts(limit?: number): Promise<BlogPost[]> {
  const sql = `
    SELECT id, title, slug, content, excerpt, featured_image as "featuredImage", author_id as "authorId", 
           category, tags, status, view_count as "viewCount", published_at as "publishedAt", 
           created_at as "createdAt", updated_at as "updatedAt"
    FROM blog_posts WHERE status = 'published' ORDER BY published_at DESC ${limit ? `LIMIT $1` : ''}
  `;
  const params = limit ? [limit] : [];
  const result = await query(sql, params);
  return result.rows;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const result = await query(
    `SELECT id, title, slug, content, excerpt, featured_image as "featuredImage", author_id as "authorId", 
            category, tags, status, view_count as "viewCount", published_at as "publishedAt", 
            created_at as "createdAt", updated_at as "updatedAt"
     FROM blog_posts WHERE slug = $1 AND status = 'published'`,
    [slug]
  );
  return result.rows[0] || null;
}

// Patient Stories
export async function getAllPatientStories(): Promise<PatientStory[]> {
  const result = await query(
    `SELECT id, title, slug, story, patient_name as "patientName", condition, doctor_id as "doctorId", 
            image_url as "imageUrl", rating, status, published_at as "publishedAt", 
            created_at as "createdAt", updated_at as "updatedAt"
     FROM patient_stories WHERE status = 'published' ORDER BY published_at DESC`
  );
  return result.rows;
}

// Appointments
export async function createAppointment(appointment: Partial<Appointment>): Promise<Appointment> {
  const result = await query(
    `INSERT INTO appointments (patient_name, patient_email, patient_phone, patient_age, doctor_id, specialty_id, location_id, appointment_date, appointment_time, reason_for_visit, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     RETURNING id, patient_name as "patientName", patient_email as "patientEmail", patient_phone as "patientPhone", patient_age as "patientAge", 
               doctor_id as "doctorId", specialty_id as "specialtyId", location_id as "locationId", appointment_date as "appointmentDate", 
               appointment_time as "appointmentTime", reason_for_visit as "reasonForVisit", status, notes, created_at as "createdAt", updated_at as "updatedAt"`,
    [
      appointment.patientName,
      appointment.patientEmail,
      appointment.patientPhone,
      appointment.patientAge,
      appointment.doctorId,
      appointment.specialtyId,
      appointment.locationId,
      appointment.appointmentDate,
      appointment.appointmentTime,
      appointment.reasonForVisit,
      'pending',
    ]
  );
  return result.rows[0];
}

// Contact Queries
export async function createContactQuery(query_data: Partial<ContactQuery>): Promise<ContactQuery> {
  const result = await query(
    `INSERT INTO contact_queries (name, email, phone, subject, message, query_type)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, email, phone, subject, message, query_type as "queryType", is_read as "isRead", response, responded_at as "respondedAt", created_at as "createdAt", updated_at as "updatedAt"`,
    [
      query_data.name,
      query_data.email,
      query_data.phone,
      query_data.subject,
      query_data.message,
      query_data.queryType,
    ]
  );
  return result.rows[0];
}
