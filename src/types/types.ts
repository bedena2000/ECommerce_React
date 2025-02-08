export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface CategoryData {
  limit: number;
  products: Product[];
  skip: number;
  total: 5;
}

export interface Product {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    barcode: string;
    createdAt: string;
    qrCode: string;
    updatedAt: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
  }[];
  shippingInformation: string;
  sku: string;
  stock: string;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}
