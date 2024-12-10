import React from 'react';
import { Award, Shield, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description:
      'Each piece is meticulously crafted by our master jewelers with decades of experience.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'All our jewelry pieces undergo rigorous quality checks and come with certification.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description:
      'We pride ourselves on providing exceptional service and building lasting relationships.',
  },
  {
    icon: Users,
    title: 'Family Legacy',
    description:
      'Three generations of jewelry expertise, serving our community since 1970.',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">About Luxe Jewels</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For over 50 years, we've been crafting timeless pieces that celebrate
          life's most precious moments. Our commitment to excellence and
          attention to detail has made us a trusted name in fine jewelry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=800"
            alt="Jewelry Workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-serif mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1970, Luxe Jewels began as a small family workshop with a
            passion for creating beautiful, handcrafted jewelry. Today, we
            continue that tradition of excellence, combining time-honored
            techniques with modern innovation.
          </p>
          <p className="text-gray-600">
            Our team of master craftsmen and certified gemologists work together
            to create pieces that not only capture the eye but also tell a
            story. Each creation is a testament to our dedication to quality and
            our love for the art of jewelry making.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <IconComponent className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}