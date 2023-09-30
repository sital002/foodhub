"use client";

import CartItem from "@/components/cart-item/cart-item";
import ClearCartBtn from "@/components/clear-cart-btn/clear-cart-btn";
import { useEffect, useRef, useState } from "react";
import Checkout from "./components/checkout/Checkout";
import CartSkeleton from "@/utils/CartSkeleton";
import { useSession } from "next-auth/react";
import CheckoutComponent from "@/components/checkout-component/checkout-component";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listRef] = useAutoAnimate<HTMLDivElement>();
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

  if (cartItems.length === 0)
    return <h1 className="text-3xl font-bold text-center">No items in Cart</h1>;
  if (showCheckout) return <Checkout cartItems={cartItems} />;

  return (
    <div className=" mx-auto max-w-3xl w-full mt-5 border  p-3 rounded-md  shadow-lg">
      <div className="px-1 rounded-md py-7 mb-4">
        {loading ? (
          new Array(4).fill(0).map((_, i) => <CartSkeleton key={i} />)
        ) : (
          <>
            <ClearCartBtn setCartItems={setCartItems} />
            <div className="overflow-y-scroll max-h-[600px]">
              <div ref={listRef}>
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
            </div>
          </>
        )}
      </div>
      <CheckoutComponent
        cartItems={cartItems}
        setShowCheckout={setShowCheckout}
      />
    </div>
  );
};

export default Cart;
