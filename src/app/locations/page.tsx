import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

const locations = [
  {
    name: 'Dhaka Center',
    address: '123 Healthcare Avenue, Dhaka 1200, Bangladesh',
    phone: '+880 1234 567890',
    email: 'dhaka@medicare.com',
    hours: '09:00 AM - 06:00 PM (Mon-Fri), 09:00 AM - 1:00 PM (Sat)',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
  },
  {
    name: 'Chittagong Center',
    address: '456 Medical Plaza, Chittagong, Bangladesh',
    phone: '+880 1234 567891',
    email: 'chittagong@medicare.com',
    hours: '10:00 AM - 05:00 PM (Mon-Fri), 10:00 AM - 12:00 PM (Sat)',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
  },
];

export const metadata = {
  title: 'Locations - MediCare',
  description: 'Visit our healthcare centers across the region.',
  keywords: 'locations, clinics, hospitals, centers',
};

export default function LocationsPage() {
  return (
    <>
      <Hero
        title="Our Locations"
        subtitle="Visit us at one of our convenient healthcare centers"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="small"
      />

      <Section
        title="Healthcare Centers"
        subtitle="Find the perfect location nearest to you"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card
              key={location.name}
              title={location.name}
              image={location.image}
              href={`/en/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-sm text-neutral-600">📍 Address</p>
                  <p className="text-neutral-900">{location.address}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">📞 Phone</p>
                  <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-700">
                    {location.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">✉️ Email</p>
                  <a href={`mailto:${location.email}`} className="text-primary-600 hover:text-primary-700">
                    {location.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">🕒 Hours</p>
                  <p className="text-neutral-900 text-sm">{location.hours}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
