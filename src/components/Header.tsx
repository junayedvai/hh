'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                HC
              </div>
              <span className="font-bold text-lg text-neutral-900 hidden sm:block">
                MediCare
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/doctors"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="/specialties"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Specialties
            </Link>
            <Link
              href="/health-packages"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/appointment"
              className="hidden sm:inline-flex px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-neutral-200 py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/doctors"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="/specialties"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Specialties
            </Link>
            <Link
              href="/health-packages"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/appointment"
              className="block px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
