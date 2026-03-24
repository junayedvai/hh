import { Section } from '@/components/Section';

export const metadata = {
  title: 'Patient & Visitor Guide - MediCare',
  description: 'Important information for patients and visitors.',
};

export default function PatientGuidePage() {
  return (
    <>
      <div className="bg-secondary-50 border-b border-secondary-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900">Patient & Visitor Guide</h1>
          <p className="text-neutral-600 mt-2">Everything you need to know before your visit</p>
        </div>
      </div>

      <Section title="Before Your Appointment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Required Documents</h3>
            <ul className="text-neutral-600 space-y-2">
              <li>✓ Valid ID/Passport</li>
              <li>✓ Insurance card (if applicable)</li>
              <li>✓ Medical history documents</li>
              <li>✓ List of current medications</li>
            </ul>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Arrival Time</h3>
            <ul className="text-neutral-600 space-y-2">
              <li>✓ Arrive 15 minutes early</li>
              <li>✓ Allow time for check-in</li>
              <li>✓ Bring your appointment confirmation</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50" title="During Your Visit">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">1️⃣</div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Registration</h3>
                <p className="text-neutral-600">Complete registration at the reception desk</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">2️⃣</div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Wait in Reception</h3>
                <p className="text-neutral-600">Wait for your name to be called by the healthcare staff</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">3️⃣</div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Consultation</h3>
                <p className="text-neutral-600">Meet with your doctor for diagnosis and treatment plan</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">4️⃣</div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Follow-up</h3>
                <p className="text-neutral-600">Schedule follow-up appointment at reception if needed</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Hospital Facilities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Emergency Department</h3>
            <p className="text-sm text-neutral-600">24/7 emergency services available</p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Laboratory</h3>
            <p className="text-sm text-neutral-600">Advanced diagnostic facilities</p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Imaging Center</h3>
            <p className="text-sm text-neutral-600">CT, MRI, X-ray services</p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Pharmacy</h3>
            <p className="text-sm text-neutral-600">On-site medications available</p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Cafeteria</h3>
            <p className="text-sm text-neutral-600">Healthy food and beverages</p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="font-semibold text-neutral-900 mb-2">Parking</h3>
            <p className="text-sm text-neutral-600">Ample parking available</p>
          </div>
        </div>
      </Section>
    </>
  );
}
