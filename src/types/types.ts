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

export interface cartProduct {
  product: Product;
  quantity: number;
}


// // Review interface
// interface Review {
//   rating: string;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }
//
// // Product interface
// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   price: string;
//   discountPercentage: string;
//   rating: string;
//   stock: string;
//   tags: string[];
//   brand: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: Review[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: string[];
//   thumbnail: string;
// }