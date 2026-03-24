import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'About MediCare - Premium Healthcare',
  description: 'Learn about MediCare\'s mission, values, and commitment to excellence in healthcare.',
  keywords: 'about us, healthcare provider, mission, values',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About MediCare"
        subtitle="Leading Healthcare Excellence Since 2010"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="small"
      />

      <Section title="Our Story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-neutral-600 mb-4">
              MediCare was founded with a vision to provide world-class healthcare services to patients across the region. What started as a single facility has grown into a network of modern hospitals with cutting-edge medical technology.
            </p>
            <p className="text-lg text-neutral-600 mb-4">
              Our commitment to excellence, patient care, and continuous innovation has made us a trusted name in healthcare. We believe that quality healthcare should be accessible and affordable for everyone.
            </p>
            <p className="text-lg text-neutral-600">
              Today, we are proud to serve thousands of patients annually with a team of highly qualified doctors, nurses, and support staff dedicated to your health and wellbeing.
            </p>
          </div>
          <div className="bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Achievements</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-neutral-900">Award-Winning Care</p>
                  <p className="text-sm text-neutral-600">Recognized for excellence in patient care</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">👨‍⚕️</span>
                <div>
                  <p className="font-semibold text-neutral-900">500+ Doctors</p>
                  <p className="text-sm text-neutral-600">Experienced specialists in all fields</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <p className="font-semibold text-neutral-900">10 Locations</p>
                  <p className="text-sm text-neutral-600">Serving patients across the region</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💝</span>
                <div>
                  <p className="font-semibold text-neutral-900">100K+ Patients</p>
                  <p className="text-sm text-neutral-600">Trusted by patients and families</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50" title="Our Mission & Values">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Mission</h3>
            <p className="text-neutral-600">
              To provide exceptional, patient-centered healthcare through compassion, integrity, and continuous innovation, ensuring every patient receives the highest quality care.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Vision</h3>
            <p className="text-neutral-600">
              To be the most trusted and respected healthcare provider, known for our excellence, innovation, and commitment to improving lives and health outcomes.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Values</h3>
            <p className="text-neutral-600">
              Patient-centered care, medical excellence, integrity, compassion, and accountability. We are committed to ethical practices and continuous improvement.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Why Choose MediCare?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Expert Medical Team</h3>
              <p className="text-neutral-600">Board-certified doctors with years of experience in their specialties</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Advanced Technology</h3>
              <p className="text-neutral-600">Latest medical equipment and diagnostic facilities</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">24/7 Emergency Care</h3>
              <p className="text-neutral-600">Round-the-clock emergency services and support</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Patient Comfort</h3>
              <p className="text-neutral-600">Comfortable facilities and compassionate care</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Affordable Pricing</h3>
              <p className="text-neutral-600">Transparent pricing and insurance coverage</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Quality Assurance</h3>
              <p className="text-neutral-600">Stringent quality controls and safety protocols</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
