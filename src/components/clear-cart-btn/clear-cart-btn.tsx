
"use client";

import { useRouter } from "next/navigation";


function ClearCartBtn() {
    const router = useRouter();
    async  function clearCart() {
        const res = await   fetch("/api/cart/clear", {
               method: "DELETE",
               headers: {
                   "Content-Type": "application/json"
               },
           });
           if (!res.ok) {
               throw new Error("Failed to fetch data");
           }
           router.refresh();
   
       }

  return (
    <button className="text-slate-400 p-1 text-end cursor-pointer" onClick={clearCart}>Clear All</button>
  )

}

export default ClearCartBtn