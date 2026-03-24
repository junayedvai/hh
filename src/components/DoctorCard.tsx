'use client';

import React from 'react';
import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  specialties: string[];
  image?: string;
  phone?: string;
  experience?: number;
  fee?: number;
  href?: string;
}

export function DoctorCard({
  name,
  specialties,
  image,
  phone,
  experience,
  fee,
  href,
}: DoctorCardProps) {
  return (
    <a href={href} className="block group">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-soft hover:shadow-card hover:border-primary-300 transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
              <span className="text-4xl text-neutral-400">👨‍⚕️</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Name */}
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Dr. {name}
          </h3>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.slice(0, 2).map((specialty) => (
              <span
                key={specialty}
                className="inline-block px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
            {specialties.length > 2 && (
              <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                +{specialties.length - 2}
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="space-y-2 mb-4">
            {experience && (
              <p className="text-sm text-neutral-600">
                <span className="font-medium">{experience}+</span> years experience
              </p>
            )}
            {fee && (
              <p className="text-sm text-neutral-600">
                Consultation: <span className="font-medium">৳{fee.toLocaleString()}</span>
              </p>
            )}
            {phone && (
              <p className="text-sm text-neutral-600">
                <a href={`tel:${phone}`} className="text-primary-600 hover:text-primary-700">
                  {phone}
                </a>
              </p>
            )}
          </div>

          {/* CTA */}
          <button className="w-full py-2 bg-primary-600 text-white rounded-lg font-medium text-sm hover:bg-primary-700 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </a>
  );
}
