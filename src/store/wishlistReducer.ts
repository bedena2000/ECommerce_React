import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { Product } from "@/types/types.ts";

const initialState: Product[] = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<Product>) => {
            if(state.filter((product: Product) => product.id === action.payload.id).length === 0) {
                state.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<number | string>) => {
            return state.filter((product: Product) => product.id !== action.payload);
        }
    }
});

// Export the action creators
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Export the reducer to be added to the store
export default wishlistSlice.reducer;

