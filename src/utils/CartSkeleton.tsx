import CartItem from "@/components/cart-item/cart-item";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartSkeleton = () => {
  return (
    <>
      <div
        role="status"
        className="p-3 border-solid border-2 ease-in duration-200 animate-pulse rounded-md flex gap-2 mb-6 shadow-md shadow-gray-200 justify-between sm:px-5  md:px-16 lg:px-0 lg:w-[700px] bg-white"
      >
        <div className="ml-2 flex items-center justify-center w-auto h-[40px] bg-gray-300 rounded  dark:bg-gray-500 ">
          <svg
            className="w-full h-full text-gray-200 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 max-h-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[460px] mb-2.5"></div>
          {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
        </div>
        <RiDeleteBin5Line className="text-3xl  text-gray-500 mr-2" />
      </div>
      <span className="sr-only">Loading...</span>
    </>
  );
};

export default CartSkeleton;
