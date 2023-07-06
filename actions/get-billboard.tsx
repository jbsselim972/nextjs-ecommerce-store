const billboardsUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${billboardsUrl}/${id}`);
  return res.json();
};

export default getBillboard;
