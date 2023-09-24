"use client";

import CartItem from "@/components/cart-item/cart-item";
import CheckoutComponent from "@/components/checkout-component/checkout-component";
import ClearCartBtn from "@/components/clear-cart-btn/clear-cart-btn";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout/Checkout";
import Loading from "./loading";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const res = await fetch("/api/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = (await res.json()) as CartItem[];
        setCartItems(data);
      } catch (err: any) {
        console.trace(err);
      }
    };
    getCartItems();
  }, []);
  if (showCheckout) return <Checkout cartItems={cartItems} />;
  return (
    <div className="lg:flex justify-center mt-5  gap-7  max-h-[600px] overflow-y-scroll">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
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
      </div>
      <CheckoutComponent
        cartItems={cartItems}
        setShowCheckout={setShowCheckout}
      />
    </div>
  );
};

export default Cart;
