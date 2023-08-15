"use client";

import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";

const CartItem = () => {
  const MAX_LIMIT = 999;
  const MIN_LIMIT = 1;
  const [count, setCount] = useState<number>(1);
  return (
    <div className="rounded-md flex my-6  shadow-md shadow-gray-200 justify-between sm:px-5  md:px-16 lg:px-0 bg-white">
      <div className="flex items-center p-3">
        <div className="flex items-center">
          <input type="checkbox" />
          <img
            className="h-[30px] mx-2"
            src="https://pluspng.com/img-png/laptop-png-hd-laptop-notebook-png-image-2078.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 text-[14px]">
          <p className="text-gray-700 text-sm">
            Dell Vostra Laptop 32GB Ram with 256 SSD
          </p>
        </div>
      </div>

      <div className=" p-2 md:flex md:items-center gap-2 ">
        <div>
          <p className="text-orange-500 text-[12px]">Rs 2000</p>
          <p className="text-gray-600 line-through text-[10px]">Rs 2500</p>
          <p className="text-[9px]">-45%</p>
        </div>

        <div className="border border-gray-300 px-3 w-fit  flex items-center">
          <button
            className="text-center text-x text-gray-500 cursor-pointer"
            onClick={() => {
              if (count > MIN_LIMIT) setCount(count - 1);
            }}
          >
            -
          </button>
          <input
            className="mx-1 w-12 text-center px-1 py-2 text-gray-600 tracking-wider border-none outline-none "
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
            className=" bg-white text-center  text-xl  text-gray-500 cursor-pointer"
            onClick={() => {
              if (count < MAX_LIMIT) setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <RiDeleteBin5Line className="text-2xl cursor-pointer text-gray-500" />
      </div>
    </div>
  );
};

export default CartItem;
