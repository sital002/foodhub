"use client";

import { useState } from "react";

const Quantity = () => {
  const MAX_LIMIT = 999;
  const MIN_LIMIT = 1;

  const [quantity, setQuantity] = useState<number>(1);

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
      <button className="ml-3 uppercase font-bold bg-sky-700 py-1 rounded-full h-auto text-slate-100 px-8">
        Add to Cart
      </button>
    </div>
  );
};

export default Quantity;
