import { configureStore } from "@reduxjs/toolkit";

// Reducers
import productReducer from "@/store/productsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
