import React from 'react';
import MetalPrices from '../components/home/MetalPrices';
import Carousel from '../components/home/Carousel';
import ProductGrid from '../components/products/ProductGrid';

export default function Home() {
  return (
    <>
      <MetalPrices />
      <Carousel />
      <ProductGrid type="Home" />
    </>
  );
}