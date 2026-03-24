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
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email
    if (!validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (data.phone && !validatePhone(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Insert contact query
    const result = await query(
      `INSERT INTO contact_queries (name, email, phone, subject, message, query_type, is_read)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, name, email, message, created_at`,
      [
        data.name,
        data.email,
        data.phone || null,
        data.subject || null,
        data.message,
        data.queryType || 'general',
        false,
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received',
        data: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
