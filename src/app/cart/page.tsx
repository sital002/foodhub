"use client";

import CartItem from "@/components/cart-item/cart-item";
// import CheckoutComponent from "@/components/checkout-component/checkout-component";
import ClearCartBtn from "@/components/clear-cart-btn/clear-cart-btn";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout/Checkout";
import CartSkeleton from "@/utils/CartSkeleton";
import { useSession } from "next-auth/react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data } = useSession();

  useEffect(() => {
    const getCartItems = async () => {
      if (!data) return;
      setLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = (await res.json()) as CartItem[];
        console.log(data);
        setCartItems(data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        console.trace(err);
      }
    };
    getCartItems();
  }, [data]);
  if (showCheckout) return <Checkout cartItems={cartItems} />;

  return (
    <div className="lg:flex justify-center mt-5  gap-7  max-h-[600px] overflow-y-scroll">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        {loading ? (
          new Array(4).fill(0).map((_, i) => <CartSkeleton key={i} />)
        ) : (
          <>
            <ClearCartBtn />
            {cartItems.length > 0 &&
              cartItems.map((item: CartItem) => (
                <CartItem
                  setCartItems={setCartItems}
                  key={item._id.toString()}
                  _id={item._id.toString()}
                  price={item.price}
                  productName={item.productName}
                  description={item.description}
                  images={item.images}
                />
              ))}
          </>
        )}
      </div>
      {/* <CheckoutComponent
      cartItems={cartItems}
      setShowCheckout={setShowCheckout}
    /> */}
    </div>
  );
};

export default Cart;
