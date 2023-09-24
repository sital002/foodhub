import CategoryCard from "@/components/category-card/category-card";
import Wrapper from "@/components/wrapper/wrapper";
import React from "react";
import backeryImg from "@assets/bakery.png";
import nonVegImg from "@assets/non-veg-resturant.png";
import vegImg from "@assets/veg-resturant.png";
import LoadingSkeleton from "@/utils/LoadingSkeleton";
export default function Loading() {
  return (
    <div role="status" className=" animate-pulse ">
      <div className="flex items-center justify-center w-screen h-[70vh] bg-gray-300 rounded dark:bg-gray-300">
        <svg
          className="w-60 h-60 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <Wrapper>
        <h2 className="text-2xl font-bold my-2 text-slate-600">
          Shop By Categories
        </h2>
        <p className="text-gray-500"> We&apos;ve Got Something For Everyone</p>
        <CategoryCard
          title="Veg Resturant"
          img={vegImg}
          alt={"Veg Resturant"}
        />
        <CategoryCard
          title="Non Veg Resturant"
          img={nonVegImg}
          alt={"Non Veg Resturant"}
        />
        <CategoryCard title="Bakery" img={backeryImg} alt={"Bakery"} />
      </Wrapper>
      <span className="sr-only">Loading...</span>
      <Wrapper>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {new Array(8).fill(0).map((item, index) => (
            <LoadingSkeleton key={item + index} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
