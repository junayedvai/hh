import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

const packages = [
  {
    title: 'Basic Health Checkup',
    description: 'Essential health screening package including blood tests and physical examination.',
    price: '৳2,500',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['Blood Test', 'Physical Exam', 'BP Check'],
  },
  {
    title: 'Comprehensive Health Screening',
    description: 'Full body health checkup with extended lab tests and specialist consultation.',
    price: '৳5,000',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['CBC', 'Lipid Panel', 'Liver Tests', 'Kidney Tests'],
  },
  {
    title: 'Cardiac Health Package',
    description: 'Specialized cardiac screening including ECG and echocardiography.',
    price: '৳8,000',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['ECG', 'Echocardiography', 'Stress Test', 'Cardiac Enzyme Panel'],
  },
  {
    title: 'Diabetes Screening Package',
    description: 'Complete diabetes evaluation and management planning.',
    price: '৳3,500',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['Fasting Glucose', 'HbA1c', 'Kidney Function', 'Lipid Profile'],
  },
  {
    title: 'Women\'s Health Package',
    description: 'Comprehensive health screening designed for women\'s wellbeing.',
    price: '৳6,000',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['Gynec Exam', 'Ultrasound', 'Lab Tests', 'Cancer Screening'],
  },
  {
    title: 'Men\'s Health Package',
    description: 'Specialized health screening for men including prostate health.',
    price: '৳6,500',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    tests: ['PSA Test', 'Cardiac Exam', 'Lab Tests', 'Fitness Assessment'],
  },
];

export const metadata = {
  title: 'Health Packages - MediCare',
  description: 'Affordable health checkup packages tailored to your needs.',
  keywords: 'health packages, screening, preventive care, checkup',
};

export default function HealthPackagesPage() {
  return (
    <>
      <Hero
        title="Health Packages"
        subtitle="Affordable preventive health screening packages"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="medium"
      />

      <Section
        title="Choose Your Package"
        subtitle="Select the perfect health screening package for your needs"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              image={pkg.image}
              metadata={pkg.price}
              href={`/health-packages/${pkg.title.toLowerCase().replace(/\s+/g, '-')}`}
              cta="View Details"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
