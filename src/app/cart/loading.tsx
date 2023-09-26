import CartSkeleton from "@/utils/CartSkeleton";

export default function Loading() {
  return (
    <div className="lg:flex justify-center mt-5  gap-7  max-h-[600px] overflow-y-scroll">
      {/* <div className="bg-gray-50 px-7 rounded-md py-7 my-4">
        <p>Clear All</p>
        <div>
          {new Array(4).fill(0).map((item, index) => (
            <CartSkeleton key={item + index} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

function CheckoutSkeleton() {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    ></div>
  );
}
