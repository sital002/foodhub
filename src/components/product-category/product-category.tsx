import React from "react";
import Wrapper from "@components/wrapper/wrapper";
import ProductCard from "@components/product-card/product-card";

export interface ProductProps {
  _id: string;
  productName: string;
  price: number;
  description?: string;
  images: any;
}
interface ProductCategoryProps {
  title: string;
  products: ProductProps[];
}

export default function ProductCategory({
  title,
  products,
}: ProductCategoryProps) {
  return (
    <Wrapper>
      <h2 className="text-2xl font-bold my-2">{title}</h2>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: ProductProps) => (
          <ProductCard
            _id={product._id}
            productName={product.productName}
            images={product.images}
            description={product.description}
            price={product.price}
            alt={product.productName}
          />
        ))}
      </div>
    </Wrapper>
  );
}
