'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: 'small' | 'medium' | 'large';
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  height = 'large',
}: HeroProps) {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-[500px]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center text-center text-white overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover -z-10"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-100 mb-8 animate-fade-in">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors animate-fade-in"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
