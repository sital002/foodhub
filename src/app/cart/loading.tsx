import ClearCartBtn from "@/components/clear-cart-btn/clear-cart-btn";
import CartSkeleton from "@/utils/CartSkeleton";

export default function Loading() {
  return (
    <div className="lg:flex justify-center mt-5  gap-7  max-h-[600px] overflow-y-scroll">
      <div className="bg-gray-50 px-7 rounded-md py-7 my-4">
        <p>Clear All</p>
        <div>
          {new Array(4).fill(0).map((item, index) => (
            <CartSkeleton key={item + index} />
          ))}
        </div>
      </div>
      <CheckoutSkeleton />
    </div>
  );
}

function CheckoutSkeleton() {
  return (
    <div className="shadow-lg shadow-gray-100 bg bg-gray-50 rounded-md p-3">
      <p className="text-xl text-orange-500">Order Summery</p>
      <div className="flex justify-between my-4">
        <p className="text-gray-500">Subtotal ({0} items)</p>
        <p>NPR. {0}</p>
      </div>
      <div className="flex">
        <input
          type="text"
          className="h-9 w-full bg-white rounded-md pl-3 border border-gray-300 outline-none"
          placeholder="Enter Coupen Code"
        />
        <div className="bg-sky-600 text-white px-7 py-1 rounded-md ml-1">
          Apply
        </div>
      </div>
      <div className="flex my-3 justify-between">
        <p>Total</p>
        <p className="text-[18px] text-orange-500">NPR. {0}</p>
      </div>
      <div className=" w-full bg-orange-500 text-white capitalize py-2 px-4 rounded-md text-center">
        Proceed to Checkout ({0})
      </div>
    </div>
  );
}
