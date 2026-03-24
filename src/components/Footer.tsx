'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                HC
              </div>
              <span className="font-bold text-lg">MediCare</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Premium healthcare services delivering excellence in patient care and medical expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/specialties" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="/health-packages" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Health Packages
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-guide" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Patient Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <p className="font-medium text-white">Dhaka Center</p>
                <p>123 Healthcare Avenue, Dhaka 1200</p>
              </li>
              <li>
                <a href="tel:+8801234567890" className="hover:text-primary-400 transition-colors">
                  +880 1234 567890
                </a>
              </li>
              <li>
                <a href="mailto:info@medicare.com" className="hover:text-primary-400 transition-colors">
                  info@medicare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 py-8">
          {/* Bottom Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} MediCare Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
