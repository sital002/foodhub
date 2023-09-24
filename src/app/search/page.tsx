"use client";

import FilterOptions from "@/components/filter-option/filter-option";
import Loading from "@/components/product-card/loading";
import ProductCard from "@/components/product-card/product-card";
import Wrapper from "@/components/wrapper/wrapper";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchItem() {
      try {
        setLoading(true);
        setFilteredData([]);
        const res = await fetch(
          `/api/search?query=${searchParams.get("query")}`
        );
        const data = await res.json();
        console.log(data);
        setFilteredData(data.filteredItem);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.trace(err);
      }
    }
    searchItem();
  }, [searchParams]);
  return (
    <div className="">
      <FilterOptions />
      <Wrapper>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? new Array(8)
                .fill(0)
                .map((item, index) => <Loading key={item + index} />)
            : filteredData.length > 0 &&
              filteredData.map((item) => (
                <ProductCard
                  key={item._id}
                  _id={item._id}
                  alt={item.productName}
                  images={item.images}
                  price={item.price}
                  productName={item.productName}
                />
              ))}
        </div>
      </Wrapper>
    </div>
  );
}
