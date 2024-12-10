import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Category', path: '/category' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export default function NavLinks({ className = '' }) {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={`${className} text-gray-600 hover:text-purple-600 transition-colors`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}