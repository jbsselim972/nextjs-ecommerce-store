const ProductsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${ProductsUrl}/${id}`);
  return res.json();
};

export default getProduct;
