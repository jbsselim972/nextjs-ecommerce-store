const CategoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${CategoryUrl}/${id}`);
  return res.json();
};

export default getCategory;
