import React from "react";
import { useDispatch } from "react-redux";
import { Weight } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import { addToCart } from "../../store/slices/cartSlice";
import { whatAppNumber } from "../../mockData";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // const handleWhatsAppClick = () => {
  //   const whatsappUrl = `https://wa.me/?text=Check out this product: ${
  //     product.name
  //   } - ${product.price.toLocaleString()}!`;
  //   window.open(whatsappUrl, "_blank");
  // };

  const greetingMessage = "Hello! I'd like to inquire about your services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(greetingMessage);
    const whatsappURL = `https://wa.me/${whatAppNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-700">
            <Weight className="h-5 w-5 mr-1" />
            <span>{product.weight}</span>
          </div>
          <div className="flex items-center text-purple-600 font-semibold">
            <FaRupeeSign className="h-3 w-5" />
            <span>{product.price.toLocaleString()}</span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors hidden"
        >
          Add to Cart
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}
