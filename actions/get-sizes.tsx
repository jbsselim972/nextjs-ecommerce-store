const SizesURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(SizesURL);
  return res.json();
};

export default getSizes;
