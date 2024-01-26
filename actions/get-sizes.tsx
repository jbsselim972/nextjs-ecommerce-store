import { API_URL } from "@/lib/constants";

const SizesURL = `${API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(SizesURL);
  return res.json();
};

export default getSizes;
