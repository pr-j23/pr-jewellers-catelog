import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gold: 2023.50,
  silver: 23.75,
  lastUpdated: new Date().toISOString(),
};

const metalPricesSlice = createSlice({
  name: 'metalPrices',
  initialState,
  reducers: {
    updatePrices: (state, action) => {
      state.gold = action.payload.gold;
      state.silver = action.payload.silver;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const { updatePrices } = metalPricesSlice.actions;
export const selectMetalPrices = (state) => state.metalPrices;

export default metalPricesSlice.reducer;