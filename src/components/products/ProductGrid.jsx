import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { selectAllProducts } from "../../store/slices/productsSlice";
import { sortProducts } from "../../utils";
import ProductFilter from "./ProductFilter";

export default function ProductGrid({ type }) {
  const products = useSelector(selectAllProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("default");

  // First filter by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Then sort the filtered products
  const sortedProducts = sortProducts(filteredProducts, selectedSort);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-serif text-center mb-8">
        Featured Collections
      </h2>
      {type !== "home" && (
        <>
          <ProductFilter
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSelectedSort}
          />

          <div className="text-gray-600 text-sm mb-4">
            Showing {sortedProducts.length} products
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
