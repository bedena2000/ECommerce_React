import { configureStore } from "@reduxjs/toolkit";

// Reducers
import productReducer from "@/store/productsSlice";
import wishlistReducer from "@/store/wishlistReducer.ts";
import cartReducer from "@/store/cartReducer.ts";
import detailsReducer from "@/store/detailsReducer.ts";
import searchOptionReducer from "@/store/searchOptionReducer.ts";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    searchOptionDetails: searchOptionReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
