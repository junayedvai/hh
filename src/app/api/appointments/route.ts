import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateEmail, validatePhone, rateLimiter } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (rateLimiter.isLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Validate required fields
    if (!data.patientName || !data.patientEmail || !data.patientPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email
    if (!validateEmail(data.patientEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone
    if (!validatePhone(data.patientPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Insert appointment
    const result = await query(
      `INSERT INTO appointments (patient_name, patient_email, patient_phone, patient_age, doctor_id, specialty_id, location_id, appointment_date, appointment_time, reason_for_visit, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING id, patient_name, patient_email, patient_phone, appointment_date, appointment_time, status, created_at`,
      [
        data.patientName,
        data.patientEmail,
        data.patientPhone,
        data.patientAge || null,
        data.doctorId || null,
        data.specialtyId || null,
        data.locationId || null,
        data.appointmentDate,
        data.appointmentTime,
        data.reason || null,
        'pending',
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment booked successfully',
        data: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Appointment API error:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await query(
      `SELECT id, patient_name, patient_email, patient_phone, patient_age, doctor_id, appointment_date, appointment_time, status
       FROM appointments
       WHERE status = 'confirmed'
       ORDER BY appointment_date DESC
       LIMIT 10`
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Fetch appointments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}
