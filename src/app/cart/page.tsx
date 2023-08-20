import CartItem from "@/components/cart-item/cart-item";
import Checkout from "@/components/checkout-price/checkout-price";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="lg:flex justify-center mt-5  gap-7">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        <p className="text-slate-400 p-1 text-end cursor-pointer">Clear All</p>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
