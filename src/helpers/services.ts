// Fetch services
import api from "@/helpers/api";

// Types
import { Category } from "@/types/types";

// Fetch all categories
export const fetchAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch signle category
export const fetchSingleCategory = (slug: string) => {
  return api.get(`/products/category/${slug}`);
};

// Fetch all products

export const fetchAllProducts = () => {
  return api.get('/products');
};
