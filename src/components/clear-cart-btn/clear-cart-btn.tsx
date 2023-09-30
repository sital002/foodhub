"use client";

import { useState } from "react";

interface ClearCartBtnProps {
  setCartItems: (value: []) => void;
}

function ClearCartBtn({ setCartItems }: ClearCartBtnProps) {
  const [loading, setLoading] = useState(false);
  async function clearCart() {
    setLoading(true);
    const res = await fetch("/api/cart/clear", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setLoading(false);
      throw new Error("Failed to fetch data");
    }
    setCartItems([]);
    setLoading(false);
  }

  return (
    <>
      <button
        disabled={loading}
        className="text-slate-400 p-1 text-end cursor-pointer mb-3"
        onClick={clearCart}
      >
        {loading ? "Clearing..." : "Clear Cart"}
      </button>
    </>
  );
}

export default ClearCartBtn;
