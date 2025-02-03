// Fetch services
import api from "@/helpers/api";

// Types
import { Category } from "@/types/types";

export const fetchAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
