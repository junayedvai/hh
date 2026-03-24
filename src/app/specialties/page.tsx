import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

const specialties = [
  {
    title: 'Cardiology',
    description: 'Specialized care for heart and cardiovascular diseases. Our cardiologists provide diagnosis, treatment, and prevention of heart conditions.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    doctors: 8,
  },
  {
    title: 'Neurology',
    description: 'Expert care for nervous system disorders including migraines, epilepsy, Parkinson\'s, and stroke recovery.',
    image: 'https://images.unsplash.com/photo-1631217314540-b6ccdaa7efd0?w=500&h=500&fit=crop',
    doctors: 6,
  },
  {
    title: 'Orthopedics',
    description: 'Comprehensive bone and joint care including surgery, physical therapy, and rehabilitation services.',
    image: 'https://images.unsplash.com/photo-1551078328-4c1ea6dd4fcf?w=500&h=500&fit=crop',
    doctors: 7,
  },
  {
    title: 'Oncology',
    description: 'Advanced cancer treatment and care with latest chemotherapy, radiation, and immunotherapy options.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop',
    doctors: 5,
  },
  {
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents with preventive and curative services.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5f400f7d1?w=500&h=500&fit=crop',
    doctors: 9,
  },
  {
    title: 'Gynecology',
    description: 'Women health services including prenatal care, delivery, and gynecological treatment.',
    image: 'https://images.unsplash.com/photo-1631217314540-b6ccdaa7efd0?w=500&h=500&fit=crop',
    doctors: 6,
  },
];

export const metadata = {
  title: 'Specialties - MediCare',
  description: 'Explore our wide range of medical specialties and departments.',
  keywords: 'medical specialties, departments, healthcare services',
};

export default function SpecialtiesPage() {
  return (
    <>
      <Hero
        title="Medical Specialties"
        subtitle="Comprehensive healthcare across all medical specialties"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="medium"
      />

      <Section
        title="Our Departments"
        subtitle="Expert care in every medical field"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Card
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              image={specialty.image}
              href={`/specialties/${specialty.title.toLowerCase()}`}
              badge={`${specialty.doctors} Doctors`}
              cta="View Doctors"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
