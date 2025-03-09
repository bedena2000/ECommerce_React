import { configureStore } from "@reduxjs/toolkit";

// Reducers
import productReducer from "@/store/productsSlice";
import wishlistReducer from "@/store/wishlistReducer.ts";
import cartReducer from "@/store/cartReducer.ts";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
