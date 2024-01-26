import { API_URL } from "@/lib/constants";

const ProductsUrl = `${API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${ProductsUrl}/${id}`);
  return res.json();
};

export default getProduct;
