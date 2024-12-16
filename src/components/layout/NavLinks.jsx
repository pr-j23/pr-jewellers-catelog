import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Category", path: "/category" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function NavLinks({ className = "", toggleMobileMenu }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleMobileMenu?.();
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          onClick={handleScrollToTop}
          className={`${className} text-gray-600 hover:text-purple-600 transition-colors`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
