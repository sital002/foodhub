"use client";

import ProductCard from "@/components/product-card/product-card";
import ProductCategory from "@/components/product-category/product-category";
import Wrapper from "@/components/wrapper/wrapper";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<ProductItem[]>([]);

  useEffect(() => {
    async function searchItem() {
      const res = await fetch(`/api/search?query=${searchParams.get("query")}`);
      const data = await res.json();
      console.log(data);
      setFilteredData(data.filteredItem);
    }
    searchItem();
  }, [searchParams]);
  return (
    <div>
      {/* <h1 className="text-3xl">Search {searchParams.toString()}</h1> */}
      <div>
        <Wrapper>
          {filteredData && (
            <ProductCategory
              title={`Search Resuts for ${searchParams.get("query")}`}
              products={filteredData}
            />
          )}
        </Wrapper>

        {/* {filteredData.map((item: ProductItem) => (
          <ProductCard
            alt={item.productName}
            description={item.description}
            key={item._id}
            _id={item._id}
            productName={item.productName}
            price={item.price}
            images={item.images}
          />
        ))} */}
      </div>
    </div>
  );
}
