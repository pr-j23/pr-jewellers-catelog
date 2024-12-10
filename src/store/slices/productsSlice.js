import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800',
      weight: '3.5g',
      price: 2999.99,
      description: '18K White Gold Diamond Ring',
      category: 'rings',
    },
    {
      id: 2,
      name: 'Pearl Necklace',
      image:
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800',
      weight: '25g',
      price: 1499.99,
      description: 'Freshwater Pearl Strand',
      category: 'necklaces',
    },
    {
      id: 3,
      name: 'Sapphire Earrings',
      image:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800',
      weight: '4g',
      price: 899.99,
      description: 'Blue Sapphire Drop Earrings',
      category: 'earrings',
    },
    {
      id: 4,
      name: 'Gold Bracelet',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800',
      weight: '12g',
      price: 1299.99,
      description: '22K Gold Chain Bracelet',
      category: 'bracelets',
    },
    {
      id: 5,
      name: 'Ruby Pendant',
      image:
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800',
      weight: '5g',
      price: 799.99,
      description: 'Natural Ruby in Rose Gold',
      category: 'pendants',
    },
    {
      id: 6,
      name: 'Diamond Tennis Bracelet',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800',
      weight: '15g',
      price: 3999.99,
      description: '4ct Total Diamond Weight',
      category: 'bracelets',
    },
  ],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export const selectAllProducts = (state) => state.products.items;
export const selectProductsByCategory = (state, category) =>
  state.products.items.filter((product) => product.category === category);
export const selectProductById = (state, productId) =>
  state.products.items.find((product) => product.id === productId);

export default productsSlice.reducer;