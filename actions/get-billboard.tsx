import { API_URL } from "@/lib/constants";

const billboardsUrl = `${API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
  try {
    const res = await fetch(`${billboardsUrl}`);
    const JsonResponse = await res.json();
    const [billboard] = JsonResponse.filter(
      (billboard: Billboard) => billboard.isMain === true
    );
    return billboard;
  } catch (error) {
    return null;
  }
};

export default getBillboard;
