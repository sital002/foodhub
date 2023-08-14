"use client";

const Checkout = () => {
  return (
    <div className=" min-w-[380px] shadow-lg shadow-gray-100 bg bg-gray-50 h-fit float-right rounded-md p-3">
      <p className="text-xl text-orange-500">Order Summery</p>
      <div className="flex justify-between my-4">
        <p className="text-gray-500">Subtotal (0 items)</p>
        <p>Rs 0</p>
      </div>
      <div>
        <input
          className="h-9 w-[250px] bg-white rounded-md pl-3 border border-gray-300 outline-none"
          type="text"
          placeholder="Enter Coupen Code"
        />
        <button className="bg-sky-600 text-white px-7 py-2 rounded-md ml-1 cursor-pointer">
          Apply
        </button>
      </div>
      <div className="flex my-3 justify-between">
        <p>Total</p>
        <p className="text-[18px] text-orange-500">Rs 0</p>
      </div>
      <button className="bg-orange-500 text-white capitalize py-3 px-4 w-[350px] rounded-md">
        Proceed to CheckOut (0)
      </button>
    </div>
  );
};

export default Checkout;
