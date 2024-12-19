import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Category", path: "/category" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function NavLinks({ className = "", toggleMobileMenu }) {
  const { user, logout } = useAuth();
  const linkClasses = `${className} text-gray-600 hover:text-purple-600 transition-colors`;
  const buttonClasses = "px-4 py-2 rounded text-white";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleMobileMenu?.();
  };

  return (
    <>
      {navItems.map(({ label, path }) => (
        <Link
          key={label}
          to={path}
          onClick={handleScrollToTop}
          className={linkClasses}
        >
          {label}
        </Link>
      ))}

      {user?.role === "admin" && (
        <Link
          to="/admin/add-product"
          onClick={handleScrollToTop}
          className={linkClasses}
        >
          Add Product
        </Link>
      )}

      {user ? (
        <button
          onClick={() => {
            logout();
            toggleMobileMenu?.();
          }}
          className="text-gray-600 hover:text-red-600 transition-colors"
        >
          Logout
        </button>
      ) : (
        <Link to="/login" onClick={handleScrollToTop} className={linkClasses}>
          Login
        </Link>
      )}
    </>
  );
}
