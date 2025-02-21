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
  availabilityStatus: string | number;
  brand: string | number;
  category: string | number;
  description: string | number;
  dimensions: {
    width: number | string;
    height: number | string;
    depth: number | string;
  };
  discountPercentage: number | string;
  id: number | string;
  images: string[];
  meta: {
    barcode: string | number;
    createdAt: string | number;
    qrCode: string | number;
    updatedAt: string | number;
  };
  minimumOrderQuantity: number;
  price: number | string;
  rating: number | string;
  returnPolicy: string | number;
  reviews: {
    comment: string | number;
    date: string | number;
    rating: number | string;
    reviewerEmail: string | number;
    reviewerName: string | number;
  }[];
  shippingInformation: string | number;
  sku: string | number;
  stock: string | number;
  tags: string[];
  thumbnail: string | number;
  title: string | number;
  warrantyInformation: string | number;
  weight: number | string;
}
