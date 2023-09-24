"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";

interface CartItemProps extends CartItem {
  setCartItems: (value: CartItem[]) => void;
}

const CartItem = ({
  _id,
  productName,
  description,
  price,
  images,
  quantity,
  setCartItems,
}: CartItemProps) => {
  const router = useRouter();

  const deleteCartItem = async () => {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: _id,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setCartItems(data);
  };

  return (
    <div className="rounded-md flex mb-6  px-2 shadow-md shadow-gray-200 justify-between lg:w-[700px] bg-white">
      <Link href={`/products/${_id}`}>
        <div className="flex items-center p-3">
          <div className="flex items-center">
            <Image
              src={images[0]?.secure_url}
              alt={productName}
              width={50}
              height={50}
              className="h-[30px] mx-2"
            />
          </div>
          <p className="text-gray-700 text-sm truncate...">{productName}</p>
        </div>
      </Link>

      <div className=" p-2 flex items-center gap-2 ">
        <div>
          <p className="text-orange-500 text-[12px]">NPR. {price}</p>
          <p className="text-gray-600 line-through text-[10px]">NPR. {price}</p>
          <p className="text-[9px]">-45%</p>
        </div>
        <div className="border border-gray-300 px-3 w-20  h-10 flex items-center">
          <button className="text-center text-x text-gray-500 cursor-pointer">
            -
          </button>
          <input
            defaultValue={1}
            className="mx-1 w-full h-full text-center px-1 py-2 text-gray-600 tracking-wider border-none outline-none "
          />
          <button className=" bg-white text-center  text-xl  text-gray-500 cursor-pointer">
            +
          </button>
        </div>
        <RiDeleteBin5Line
          className="text-2xl cursor-pointer text-gray-500"
          onClick={deleteCartItem}
        />
      </div>
    </div>
  );
};

export default CartItem;
