import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import metalPricesReducer from './slices/metalPricesSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    metalPrices: metalPricesReducer,
    cart: cartReducer,
  },
});