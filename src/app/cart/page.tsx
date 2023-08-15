import CartItem from "@/components/cart-item/cart-item";
import Checkout from "@/components/checkout-price/checkout-price";

const Cart = () => {
  return (
    <div className="lg:flex justify-center mt-5  gap-7">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
