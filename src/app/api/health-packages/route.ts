import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(
      `SELECT id, name, slug, description, image_url, category, price, discounted_price, 
              tests, duration, status, order_index
       FROM health_packages
       WHERE status = 'published'
       ORDER BY order_index ASC`
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Health packages API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch health packages' },
      { status: 500 }
    );
  }
}
