import Link from "next/link";

interface CheckoutProps {
  cartItems: CartItem[];
  setShowCheckout: (value: boolean) => void;
}

const CheckoutComponent = ({ cartItems, setShowCheckout }: CheckoutProps) => {
  if (!cartItems) return;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="shadow-lg shadow-gray-100 bg bg-gray-50 rounded-md p-3">
      <p className="text-xl text-orange-500">Order Summery</p>
      <div className="flex justify-between my-4">
        <p className="text-gray-500">Subtotal ({cartItems.length} items)</p>
        <p>NPR. {totalPrice}</p>
      </div>
      <div>
        <input
          className="h-9 w-[250px] bg-white rounded-md pl-3 border border-gray-300 outline-none"
          type="text"
          placeholder="Enter Coupen Code"
        />
        <button className="bg-sky-600 text-white px-7 py-1 rounded-md ml-1 cursor-pointer">
          Apply
        </button>
      </div>
      <div className="flex my-3 justify-between">
        <p>Total</p>
        <p className="text-[18px] text-orange-500">NPR. {totalPrice}</p>
      </div>

      <button
        className=" w-full bg-orange-500 text-white capitalize py-2 px-4 rounded-md"
        onClick={() => setShowCheckout(true)}
      >
        Proceed to Checkout ({cartItems.length})
      </button>
    </div>
  );
};

export default CheckoutComponent;
