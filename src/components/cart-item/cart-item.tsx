"use client";

import { useState } from "react";

const CartItem = () => {
  const MAX_LIMIT = 999;
  const MIN_LIMIT = 1;
  const [count, setCount] = useState<number>(1);
  return (
    <div className="rounded-md flex my-6  shadow-md shadow-gray- justify-between sm:px-5  md:px-16 lg:px-0 bg-white">
      <div className="flex items-center p-3 ">
        <div className="flex items-center">
          <input type="checkbox" />
          <img
            className="h-[60px]"
            src="https://pluspng.com/img-png/laptop-png-hd-laptop-notebook-png-image-2078.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 text-[14px] sm:text-[17px]">
          <p>Dell Vostra Laptop 32GB Ram</p>
          <p className="text-gray-500">with 256 SSD</p>
        </div>
      </div>

      <div className="text-[14px] p-2 md:flex md:items-center ">
        <div>
          <p className="text-orange-500 text-[20px]">Rs 2000</p>
          <p className="text-gray-600 line-through">Rs 2500</p>
          <p>-45%</p>
        </div>

        <div className="flex my-2 md:ml-32 items-center justify-center">
          <button
            className="px-3 text-center  text-xl  text-gray-500 cursor-pointer"
            onClick={() => {
              if (count > MIN_LIMIT) setCount(count - 1);
            }}
          >
            -
          </button>
          <input
            className="mx-2 w-[60px] text-center py-1 px-2 text-lg text-gray-600 tracking-wider border border-gray-300 outline-none "
            value={count}
            onChange={(e) => {
              if (
                e.currentTarget.value.length <= 3 &&
                e.currentTarget.value.length >= 1 &&
                e.currentTarget.value.match(/^[0-9]+$/)
              ) {
                setCount(Number(e.currentTarget.value));
              }
            }}
          />
          <button
            className="px-3 bg-white text-center  text-xl  text-gray-500 cursor-pointer"
            onClick={() => {
              if (count < MAX_LIMIT) setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
