import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { Product } from "@/types/types.ts";
import { cartProduct } from "@/types/types.ts";


const initialState: cartProduct[] = [];

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            if(state.filter((item: cartProduct) => item.product.id === action.payload.id).length === 0) {
                state.push({
                    product: action.payload,
                    quantity: 1
                });
            }
        },
        increase: (state, action: PayloadAction<Product>) => {
            const newArray = state.map((item: cartProduct) => {
              if(item.product.id === action.payload.id) {
                  return {
                      product: action.payload,
                      quantity: item.quantity + 1,
                  }
              } else {
                  return item;
              }
            });
            return newArray;
        },
        decrease: (state, action: PayloadAction<Product>) => {
            const newArray = state.map((item: cartProduct) => {
                if(item.product.id === action.payload.id) {
                    if(item.quantity !== 1) {
                        return {
                            product: action.payload,
                            quantity: item.quantity - 1,
                        }
                    } else {
                        return item;
                    }
                } else {
                    return item;
                }
            });
            return newArray;
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            return state.filter((item: cartProduct) => item.product.id !== action.payload.id);
        }
    }
});

// Export the action creators
export const { addToCart, increase, decrease, removeFromCart } = cartReducer.actions;

// Export the reducer to be added to the store
export default cartReducer.reducer;
