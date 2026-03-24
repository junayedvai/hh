import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

const blogPosts = [
  {
    title: 'Understanding Hypertension',
    description: 'Learn about high blood pressure, its causes, and effective management strategies.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'March 15, 2024',
    category: 'Health Education',
  },
  {
    title: 'Mental Health Awareness',
    description: 'Breaking stigma and understanding the importance of mental health in overall wellness.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'March 10, 2024',
    category: 'Wellness',
  },
  {
    title: 'Latest in Orthopedic Surgery',
    description: 'Exploring modern surgical techniques for bone and joint health.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'March 5, 2024',
    category: 'Medical Innovation',
  },
  {
    title: 'Diabetes Prevention Guide',
    description: 'Practical tips and lifestyle changes to prevent type 2 diabetes.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'February 28, 2024',
    category: 'Preventive Care',
  },
  {
    title: 'Heart Health in Women',
    description: 'Understanding cardiovascular health specific to women and early warning signs.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'February 20, 2024',
    category: 'Health Education',
  },
  {
    title: 'COVID-19 Recovery Support',
    description: 'Medical guidance for post-COVID syndrome management and rehabilitation.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
    date: 'February 15, 2024',
    category: 'Pandemic Care',
  },
];

export const metadata = {
  title: 'Blog & News - MediCare',
  description: 'Latest health articles and medical news from our healthcare experts.',
  keywords: 'health blog, medical news, wellness tips',
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Health Blog & News"
        subtitle="Expert insights and health tips from our medical team"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1600&h=900&fit=crop"
        height="small"
      />

      <Section title="Latest Articles" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              title={post.title}
              description={post.description}
              image={post.image}
              badge={post.category}
              metadata={post.date}
              href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
              cta="Read Article"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
