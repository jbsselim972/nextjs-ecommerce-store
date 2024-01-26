import { API_URL } from "@/lib/constants";

const ColorsURL = `${API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(ColorsURL);
  return res.json();
};

export default getColors;
