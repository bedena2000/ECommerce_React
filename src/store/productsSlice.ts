import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Review interface
interface Review {
  rating: string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Product interface
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

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
