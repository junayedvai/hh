'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  badge?: string;
  cta?: string;
  metadata?: string;
  compact?: boolean;
}

export function Card({
  title,
  description,
  image,
  icon,
  children,
  href,
  badge,
  cta,
  metadata,
  compact = false,
}: CardProps) {
  const cardContent = (
    <div className={`bg-white rounded-xl border border-neutral-200 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden h-full ${
      href ? 'hover:border-primary-300 cursor-pointer' : ''
    }`}>
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {badge}
            </div>
          )}
        </div>
      )}

      <div className={`${image ? 'p-5' : 'p-6'}`}>
        {/* Icon */}
        {icon && !image && (
          <div className="mb-4 text-primary-600">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className={`font-semibold text-neutral-900 ${compact ? 'text-base' : 'text-lg'} mb-2`}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className={`text-neutral-600 mb-4 ${compact ? 'text-sm' : 'text-sm line-clamp-3'}`}>
            {description}
          </p>
        )}

        {/* Metadata */}
        {metadata && (
          <p className="text-xs text-neutral-500 mb-3">
            {metadata}
          </p>
        )}

        {/* CTA */}
        {cta && (
          <span className="inline-block text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
            {cta} →
          </span>
        )}

        {/* Custom Content */}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
