import { API_URL } from "@/lib/constants";
import qs from "query-string";

const SizesURL = `${API_URL}/sizes`;

const getSizes = async (categoryName: string): Promise<Size[]> => {
  const url = qs.stringifyUrl({
    url: SizesURL,
    query: {
      category: categoryName,
    },
  });
  console.log(url);
  const res = await fetch(url);
  return res.json();
};

export default getSizes;
