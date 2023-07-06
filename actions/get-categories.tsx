const CategoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(CategoriesURL);
  return res.json();
};

export default getCategories;
