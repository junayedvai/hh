import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MediCare - Premium Healthcare Services',
  description: 'Leading healthcare provider offering comprehensive medical services, experienced doctors, and modern facilities.',
  keywords: 'healthcare, hospital, doctors, medical services, dhaka',
  authors: [{ name: 'MediCare' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medicare.example.com',
    title: 'MediCare - Premium Healthcare Services',
    description: 'Leading healthcare provider offering comprehensive medical services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏥</text></svg>" />
      </head>
      <body className="bg-white text-neutral-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
