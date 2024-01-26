import { API_URL } from "@/lib/constants";

const billboardsUrl = `${API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
  try {
    const res = await fetch(`${billboardsUrl}`);
    const json = await res.json();
    return json[0];
  } catch (error) {
    return null;
  }
};

export default getBillboard;
