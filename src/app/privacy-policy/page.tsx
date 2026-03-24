import { Section } from '@/components/Section';

export const metadata = {
  title: 'Privacy Policy - MediCare',
  description: 'Read our privacy policy regarding data protection and handling.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-primary-50 border-b border-primary-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900">Privacy Policy</h1>
          <p className="text-neutral-600 mt-2">Last updated: March 2024</p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-neutral">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="text-neutral-600 mb-4">
            MediCare is committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-neutral-600 mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-2">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Medical information (appointment history, health conditions)</li>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, time spent, interaction data)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
          <p className="text-neutral-600 mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-2">
            <li>Process your appointments and medical requests</li>
            <li>Send you promotional and marketing communications</li>
            <li>Improve our services based on your feedback</li>
            <li>Enforce our terms, conditions, and policies</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Security of Your Information</h2>
          <p className="text-neutral-600 mb-4">
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
          <p className="text-neutral-600">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <p className="text-neutral-600"><strong>Email:</strong> privacy@medicare.com</p>
            <p className="text-neutral-600"><strong>Phone:</strong> +880 1234 567890</p>
            <p className="text-neutral-600"><strong>Address:</strong> 123 Healthcare Avenue, Dhaka 1200</p>
          </div>
        </div>
      </Section>
    </>
  );
}
