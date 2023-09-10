"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";

interface CartItemProps {
  _id: string;
  productName: string;
  description: string;
  price: number;
  images: any;
  quantity?: number;
}

const CartItem = ({
  _id,
  productName,
  description,
  price,
  images,
  quantity,
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
    router.refresh();
  };

  return (
    <div className="rounded-md flex mb-6  shadow-md shadow-gray-200 justify-between sm:px-5  md:px-16 lg:px-0 bg-white">
      <Link href={`/products/${_id}`}>
        <div className="flex items-center p-3">
          <div className="flex items-center">
            <input type="checkbox" />
            <Image
              src={images[0].secure_url}
              alt={productName}
              width={50}
              height={50}
              className="h-[30px] mx-2"
            />
          </div>
          <div className="ml-5 text-[14px]">
            <p className="text-gray-700 text-sm">{productName}</p>
          </div>
        </div>
      </Link>

      <div className=" p-2 md:flex md:items-center gap-2 ">
        <div>
          <p className="text-orange-500 text-[12px]">{price}</p>
          <p className="text-gray-600 line-through text-[10px]">{price}</p>
          <p className="text-[9px]">-45%</p>
        </div>

        <div className="border border-gray-300 px-3 w-fit  flex items-center">
          <button className="text-center text-x text-gray-500 cursor-pointer">
            -
          </button>
          <input
            defaultValue={1}
            className="mx-1 w-12 text-center px-1 py-2 text-gray-600 tracking-wider border-none outline-none "
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
