const ColorsURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(ColorsURL);
  return res.json();
};

export default getColors;
