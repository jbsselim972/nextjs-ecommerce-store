import { API_URL } from "@/lib/constants";

const CategoryUrl = `${API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${CategoryUrl}/${id}`);
  return res.json();
};

export default getCategory;
