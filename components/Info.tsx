"use client";

import { FC } from "react";
import { ShoppingCart } from "lucide-react";

import Currency from "./ui/Currency";
import useCart from "@/hooks/use-cart";
import CustomButton from "./ui/CustomButton";

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="w-6 h-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <CustomButton
          className="flex items-center gap-x-2"
          onClick={onAddToCart}
        >
          Add to cart
          <ShoppingCart />
        </CustomButton>
      </div>
    </div>
  );
};

export default Info;
