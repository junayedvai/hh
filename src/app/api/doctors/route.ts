import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(
      `SELECT id, first_name, last_name, slug, email, phone, bio, image_url, gender, 
              experience_years, consultation_fee, location_id, is_active, is_featured
       FROM doctors
       WHERE is_active = true
       ORDER BY first_name ASC`
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Doctors API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    );
  }
}
