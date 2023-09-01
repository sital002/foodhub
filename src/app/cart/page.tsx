import CartItem from "@/components/cart-item/cart-item";
import Checkout from "@/components/checkout-price/checkout-price";

const Cart = async () => {
  const getCartItems = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const products = await res.json();
      console.log(products);
      return products;
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const cartItems = await getCartItems();
  if (!cartItems) return;
  return (
    <div className="lg:flex justify-center mt-5  gap-7">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        <p className="text-slate-400 p-1 text-end cursor-pointer">Clear All</p>
        {cartItems &&
          cartItems.map((item: any) => <CartItem key={item._id} cart={item} />)}
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
