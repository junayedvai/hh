import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { DoctorCard } from '@/components/DoctorCard';

const doctorImage = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop';

const doctorsList = [
  {
    name: 'Dr. Ahmed Hassan',
    specialties: ['Cardiology', 'Internal Medicine'],
    image: doctorImage,
    phone: '+880 1234 567890',
    experience: 15,
    fee: 500,
  },
  {
    name: 'Dr. Fatima Rahman',
    specialties: ['Neurology', 'Pediatrics'],
    image: doctorImage,
    phone: '+880 1234 567891',
    experience: 12,
    fee: 600,
  },
  {
    name: 'Dr. Mohammad Khan',
    specialties: ['Orthopedics', 'Sports Medicine'],
    image: doctorImage,
    phone: '+880 1234 567892',
    experience: 18,
    fee: 700,
  },
  {
    name: 'Dr. Rana Devi',
    specialties: ['Gynecology', 'Obstetrics'],
    image: doctorImage,
    phone: '+880 1234 567893',
    experience: 14,
    fee: 550,
  },
  {
    name: 'Dr. Ibrahim Ali',
    specialties: ['Oncology', 'Medical Research'],
    image: doctorImage,
    phone: '+880 1234 567894',
    experience: 20,
    fee: 800,
  },
  {
    name: 'Dr. Nura Singh',
    specialties: ['Dermatology', 'Cosmetic Medicine'],
    image: doctorImage,
    phone: '+880 1234 567895',
    experience: 10,
    fee: 450,
  },
];

export const metadata = {
  title: 'Find Doctors - MediCare',
  description: 'Browse our panel of experienced doctors specializing in various medical fields.',
  keywords: 'doctors, medical specialists, healthcare professionals',
};

export default function DoctorsPage() {
  return (
    <>
      <Hero
        title="Our Doctors"
        subtitle="Experienced medical professionals dedicated to your health"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="medium"
      />

      <Section
        title="Medical Team"
        subtitle="Meet our qualified healthcare professionals with years of expertise"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsList.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialties={doctor.specialties}
              image={doctor.image}
              phone={doctor.phone}
              experience={doctor.experience}
              fee={doctor.fee}
              href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
