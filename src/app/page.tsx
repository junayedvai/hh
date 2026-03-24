import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import Link from 'next/link';

const heroImage = 'https://images.unsplash.com/photo-1631217314540-b6ccdaa7efd0?w=1600&h=900&fit=crop';

const specialties = [
  {
    title: 'Cardiology',
    description: 'Heart and cardiovascular system health',
    icon: '❤️',
  },
  {
    title: 'Neurology',
    description: 'Brain and nervous system care',
    icon: '🧠',
  },
  {
    title: 'Orthopedics',
    description: 'Bone and joint health',
    icon: '💪',
  },
  {
    title: 'Oncology',
    description: 'Cancer treatment and care',
    icon: '🔬',
  },
  {
    title: 'Pediatrics',
    description: 'Children medical care',
    icon: '👶',
  },
  {
    title: 'Gynecology',
    description: 'Women health services',
    icon: '🏥',
  },
];

const features = [
  {
    title: 'Expert Doctors',
    description: 'Highly qualified and experienced medical professionals',
    icon: '👨‍⚕️',
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art medical equipment and technology',
    icon: '⚙️',
  },
  {
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency medical services',
    icon: '🚑',
  },
  {
    title: 'Patient Care',
    description: 'Compassionate and personalized patient care',
    icon: '💝',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Welcome to MediCare"
        subtitle="Excellence in Healthcare Delivery"
        backgroundImage={heroImage}
        ctaText="Book Appointment"
        ctaLink="/appointment"
      />

      {/* Quick Actions */}
      <Section
        title="Quick Access"
        centered
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/doctors" className="group">
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200 hover:border-primary-300 hover:shadow-card transition-all">
              <div className="text-4xl mb-3">👨‍⚕️</div>
              <h3 className="font-semibold text-neutral-900 mb-1">Find Doctors</h3>
              <p className="text-sm text-neutral-600">Browse our specialist doctors</p>
            </div>
          </Link>
          <Link href="/health-packages" className="group">
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200 hover:border-primary-300 hover:shadow-card transition-all">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold text-neutral-900 mb-1">Health Packages</h3>
              <p className="text-sm text-neutral-600">Check our health packages</p>
            </div>
          </Link>
          <Link href="/appointment" className="group">
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200 hover:border-primary-300 hover:shadow-card transition-all">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-semibold text-neutral-900 mb-1">Book Appointment</h3>
              <p className="text-sm text-neutral-600">Schedule your visit</p>
            </div>
          </Link>
          <Link href="/contact" className="group">
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200 hover:border-primary-300 hover:shadow-card transition-all">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold text-neutral-900 mb-1">Contact Us</h3>
              <p className="text-sm text-neutral-600">Get in touch with us</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Why Choose MediCare?"
        subtitle="We are committed to providing the highest quality healthcare services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={<div className="text-4xl">{feature.icon}</div>}
              compact
            />
          ))}
        </div>
      </Section>

      {/* Specialties */}
      <Section
        title="Our Specialties"
        subtitle="Comprehensive medical services across multiple specialties"
        centered
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Card
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              icon={<div className="text-4xl">{specialty.icon}</div>}
              href={`/specialties/${specialty.title.toLowerCase()}`}
              cta="Learn More"
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Our expert doctors are ready to help you achieve optimal health
          </p>
          <Link
            href="/appointment"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </Section>
    </>
  );
}
