import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'default-secret-key';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(
  payload: Record<string, unknown>,
  expiresIn: jwt.SignOptions['expiresIn'] = '7d'
): string {
  return jwt.sign(payload, JWT_SECRET as jwt.Secret, { expiresIn });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateRandomString(length: number = 10): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export function truncateText(text: string, length: number = 150, suffix: string = '...'): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
}

export function formatDate(date: Date): string {
  // Simple date formatter - consider using date-fns for production
  const options: any = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 900000, maxRequests: number = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  isLimited(key: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    const filtered = requests.filter((timestamp) => now - timestamp < this.windowMs);

    if (filtered.length >= this.maxRequests) {
      return true;
    }

    filtered.push(now);
    this.requests.set(key, filtered);
    return false;
  }
}

export const rateLimiter = new RateLimiter(
  parseInt(process.env.RATE_LIMIT_WINDOW || '900000'),
  parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100')
);
