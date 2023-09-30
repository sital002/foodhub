"use client";
interface CheckoutProps {
  cartItems: CartItem[];
  setShowCheckout: (value: boolean) => void;
}

const CheckoutComponent = ({ cartItems, setShowCheckout }: CheckoutProps) => {
  const totalPrice = cartItems?.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="flex justify-between items-baseline">
        <p className="text-3xl text-slate-700">
          Subtotal: <span className="text-red-500">{totalPrice}</span>
        </p>
        <button
          className="bg-red-500 text-slate-50 px-3 py-2 rounded-full uppercase textxl font-bold"
          onClick={() => setShowCheckout(true)}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default CheckoutComponent;
