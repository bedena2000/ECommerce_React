import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import {
  Product
} from '@/types/types.ts';

const initialState: Product[] = [];

// Creating store
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fillWithProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
  },
});

// Export the action creators
export const { fillWithProducts } = productsSlice.actions;

// Export the reducer to be added to the store
export default productsSlice.reducer;
