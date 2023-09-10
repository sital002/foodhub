"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface QuantityProps {
  productId: string;
}

const Quantity: FC<QuantityProps> = ({ productId }) => {
  const MAX_LIMIT = 999;
  const MIN_LIMIT = 1;
  const router = useRouter();
  async function addProductToCart(quantity: number) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const products = await res.json();
      console.log(products);
      router.push('/cart');
      router.refresh()
      return products;
    } catch (err: any) {
      console.log(err);
    }
  }

  const [quantity, setQuantity] = useState<number>(1);
  const handleSubmit = () => {
    console.log(quantity);
    addProductToCart(quantity);
  };
  return (
    <div className="h-9 flex flex-row">
      <div className="border border-gray-300 px-3 w-fit flex justify-center items-center">
        <button
          className="text-xl"
          onClick={() => {
            if (quantity > MIN_LIMIT) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <input
          type="text"
          className="w-10 mx-2 outline-none border-none bg-inherit p-1 text-center text-gray-600"
          value={quantity}
          onChange={(e) => {
            if (
              e.currentTarget.value.length <= 3 &&
              e.currentTarget.value.length >= 1 &&
              e.currentTarget.value.match(/^[0-9]+$/)
            ) {
              setQuantity(Number(e.currentTarget.value));
            }
          }}
        />
        <button
          className="text-xl"
          onClick={() => {
            if (quantity < MAX_LIMIT) setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="ml-3 uppercase font-bold bg-sky-700 py-1 rounded-full h-auto text-slate-100 px-8"
        onClick={handleSubmit}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Quantity;
