// Database seeding script
// This file contains sample data for development/testing

const sampleData = {
  locations: [
    {
      name: 'Dhaka Center',
      slug: 'dhaka-center',
      city: 'Dhaka',
      address: '123 Healthcare Avenue, Dhaka 1200',
      phone: '+880 1234 567890',
      email: 'dhaka@medicare.com',
      latitude: 23.8103,
      longitude: 90.4125,
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1200&h=600&fit=crop',
      description: 'Our main facility in Dhaka with comprehensive medical services',
      operatingHours: {
        monday: '09:00 - 17:00',
        tuesday: '09:00 - 17:00',
        wednesday: '09:00 - 17:00',
        thursday: '09:00 - 17:00',
        friday: '09:00 - 17:00',
        saturday: '09:00 - 13:00',
        sunday: 'Closed',
      },
    },
    {
      name: 'Chittagong Center',
      slug: 'chittagong-center',
      city: 'Chittagong',
      address: '456 Medical Plaza, Chittagong',
      phone: '+880 1234 567891',
      email: 'chittagong@medicare.com',
      latitude: 22.3569,
      longitude: 91.7832,
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=1200&h=600&fit=crop',
      description: 'Our expanding facility in Chittagong',
    },
  ],

  specialties: [
    {
      name: 'Cardiology',
      slug: 'cardiology',
      description: 'Heart and cardiovascular disease treatment',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
      icon: '❤️',
      orderIndex: 1,
    },
    {
      name: 'Neurology',
      slug: 'neurology',
      description: 'Brain and nervous system care',
      imageUrl: 'https://images.unsplash.com/photo-1631217314540-b6ccdaa7efd0?w=500&h=500&fit=crop',
      icon: '🧠',
      orderIndex: 2,
    },
    {
      name: 'Orthopedics',
      slug: 'orthopedics',
      description: 'Bone and joint surgery',
      imageUrl: 'https://images.unsplash.com/photo-1551078328-4c1ea6dd4fcf?w=500&h=500&fit=crop',
      icon: '💪',
      orderIndex: 3,
    },
  ],

  doctors: [
    {
      firstName: 'Ahmed',
      lastName: 'Hassan',
      slug: 'ahmed-hassan',
      email: 'ahmed@medicare.com',
      phone: '+880 1900 000001',
      bio: 'Leading cardiologist with 15+ years of experience',
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop',
      gender: 'male',
      registrationNumber: 'MC-001',
      experienceYears: 15,
      consultationFee: 500,
      specialtyId: 'cardiology',
    },
    {
      firstName: 'Fatima',
      lastName: 'Rahman',
      slug: 'fatima-rahman',
      email: 'fatima@medicare.com',
      phone: '+880 1900 000002',
      bio: 'Experienced neurologist specializing in neurological disorders',
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop',
      gender: 'female',
      registrationNumber: 'MC-002',
      experienceYears: 12,
      consultationFee: 600,
      specialtyId: 'neurology',
    },
  ],

  healthPackages: [
    {
      name: 'Basic Health Checkup',
      slug: 'basic-health-checkup',
      description: 'Essential health screening package',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
      price: 2500,
      tests: ['Blood Test', 'Physical Exam', 'BP Check'],
      duration: '1 hour',
      status: 'published',
    },
    {
      name: 'Comprehensive Health Screening',
      slug: 'comprehensive-health-screening',
      description: 'Full body health checkup with extended tests',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7d7cb?w=500&h=500&fit=crop',
      price: 5000,
      tests: ['CBC', 'Lipid Panel', 'Liver Tests', 'Kidney Tests'],
      duration: '2 hours',
      status: 'published',
    },
  ],
};

export { sampleData };
