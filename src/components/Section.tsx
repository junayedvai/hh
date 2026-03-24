'use client';

import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function Section({
  title,
  subtitle,
  children,
  centered = false,
  className = '',
}: SectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg text-neutral-600 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
