import { API_URL } from "@/lib/constants";

const CategoriesURL = `${API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(CategoriesURL);
  return res.json();
};

export default getCategories;
