import { API_URL } from "@/lib/constants";
import qs from "query-string";

const ColorsURL = `${API_URL}/colors`;

const getColors = async (categoryName: string): Promise<Color[]> => {
  const url = qs.stringifyUrl({
    url: ColorsURL,
    query: {
      category: categoryName,
    },
  });
  console.log(url);
  const res = await fetch(url);
  return res.json();
};

export default getColors;
