import React from 'react'
import Wrapper from '@components/wrapper/wrapper'
import ProductCard from '@components/product-card/product-card'



export interface ProductProps {
    _id: string,
    productName: string,
    price: number,
    description?: string,
    images: string[],
}
interface ProductCategoryProps  {
    title: string,
    products: ProductProps[];
}

export default function ProductCategory({ title, products }: ProductCategoryProps) {
  return (
              <Wrapper>
        <h2 className="text-2xl font-bold my-2">{title}</h2>
        {
            products.map((product) => (
                <ProductCard _id={product._id} productName={product.productName} images={product.images} description={product.description} price={product.price} alt={''} />
            ))
        }
      </Wrapper>
  )
}
