import React from 'react';
import { GemIcon, Crown, Watch } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Rings',
    icon: Watch,
    description: 'Engagement rings, wedding bands, and fashion rings',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800',
  },
  {
    id: 2,
    name: 'Necklaces',
    icon: Crown,
    description: 'Pendants, chains, and statement necklaces',
    image:
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800',
  },
  {
    id: 3,
    name: 'Watches',
    icon: Watch,
    description: 'Luxury timepieces and smart watches',
    image:
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=800',
  },
  {
    id: 4,
    name: 'Gemstones',
    icon: GemIcon,
    description: 'Precious and semi-precious stones',
    image:
      'https://images.unsplash.com/photo-1583937443351-f97a79a8686c?auto=format&fit=crop&w=800',
  },
];

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Our Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <IconComponent className="h-12 w-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif">{category.name}</h2>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{category.description}</p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}