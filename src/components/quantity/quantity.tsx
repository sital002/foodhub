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
  const [loading, setLoading] = useState(false);

  async function addProductToCart(quantity: number) {
    if (loading) return;
    try {
      setLoading(true);
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
        setLoading(false);
        throw new Error("Failed to fetch data");
      }
      const products = await res.json();
      router.push("/cart");
      router.refresh();
      setLoading(false);
      return products;
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  }

  const [quantity, setQuantity] = useState<number>(1);
  const handleSubmit = () => {
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
        disabled={loading}
        className="ml-3 uppercase w-52 font-bold bg-sky-700 py-2  rounded-full h-auto text-slate-100 "
        onClick={handleSubmit}
      >
        Add to Cart{" "}
        {loading ? (
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 text-white animate-spin ml-2"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Quantity;
