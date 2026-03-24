import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Corporate Services - MediCare',
  description: 'Healthcare solutions for corporations and organizations.',
};

export default function CorporateServicesPage() {
  return (
    <>
      <Hero
        title="Corporate Services"
        subtitle="Comprehensive healthcare solutions for your organization"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="small"
      />

      <Section title="Employee Health Programs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-neutral-600 mb-4">
              MediCare provides comprehensive healthcare solutions designed specifically for corporate clients. We understand the unique health needs of organizations and their employees.
            </p>
            <p className="text-lg text-neutral-600 mb-4">
              Our corporate programs focus on preventive care, wellness initiatives, and maintaining a healthy workforce that leads to improved productivity and reduced absenteeism.
            </p>
          </div>
          <div className="bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Corporate Solutions</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">Employee Health Screening Programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">On-site Medical Clinics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">Wellness Workshops & Training</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">Customized Health Packages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">Occupational Health Services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-600">Insurance Coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50" title="Why Partner with MediCare?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Tailored Solutions</h3>
            <p className="text-neutral-600">Customized programs based on your organization's size and needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Dedicated Account Manager</h3>
            <p className="text-neutral-600">Personal support for all your healthcare needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Cost Effective</h3>
            <p className="text-neutral-600">Competitive pricing and flexible payment options</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Analytics & Reporting</h3>
            <p className="text-neutral-600">Detailed insights into employee health trends</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Confidentiality</h3>
            <p className="text-neutral-600">Complete privacy and data protection guaranteed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="text-3xl mb-3">24/7</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Round-the-clock Support</h3>
            <p className="text-neutral-600">Emergency services and support available anytime</p>
          </div>
        </div>
      </Section>

      <Section title="Get in Touch">
        <div className="max-w-2xl mx-auto bg-primary-50 rounded-lg p-8 text-center border border-primary-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Partner with MediCare?
          </h3>
          <p className="text-neutral-600 mb-6">
            Contact our corporate services team to discuss a customized healthcare solution for your organization.
          </p>
          <div className="space-y-2">
            <p className="text-neutral-600">
              <strong>Email:</strong> corporate@medicare.com
            </p>
            <p className="text-neutral-600">
              <strong>Phone:</strong> +880 1234 567890 (Ext. 5000)
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Request a Proposal
          </a>
        </div>
      </Section>
    </>
  );
}
