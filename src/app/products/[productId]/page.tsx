import Image from 'next/image';
import nonVegImg from "@assets/non-veg-resturant.png"
import Wrapper from '@components/wrapper/wrapper';
<<<<<<< HEAD
import PopularProducts from '@/components/popular-products/popular-products';
import Product from '@/database/models/ProductModel';
import Quantity from '@/components/quantity/quantity';
=======
import { useState } from 'react';
import ProductCategory from '@/components/product-category/product-category';
>>>>>>> 642ffd1e64521655bd4cfd54421a11df007c9817

//  interface ProductType  {
//     productName ?: string;
//     price ?: number;
//     description ?: string;
//     images : string[]
// }
async function getProductData(productId :string){
    try {
        const product =  await Product.findById(productId);
        return product;
    }
    catch (err:any) {
        throw new Error(err)
    }
}
export default async function Page(  {params: { productId },
}: {
  params: { productId: string }
}) {
    console.log(productId)
    const product = await getProductData(productId);
    return (
        <Wrapper>
            <div className="md:flex flex-row overflow-hidden">
                <div className='w-screen max-w-md'>
                    <Image src={product.images[0] || nonVegImg} alt={product.productName || ""}  height={500} width={500} />
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold'>{product.productName}</h1>
                    <p className='text-gray-50 bg-sky-700 w-fit px-2 my-3 rounded-3xl md:my-5 cursor-pointer'>Baishnab Sweets</p>
                    <p className='text-rose-500 my-3  md:my-5'>{product.price}</p>
                    <Quantity/>
                </div>
            </div>
            <div className='my-4'>
<<<<<<< HEAD
                <p className='text-2xl font-medium my-2'>You might also like</p>
                <PopularProducts/>
=======
                <ProductCategory title="You might also like" products={[]} />
>>>>>>> 642ffd1e64521655bd4cfd54421a11df007c9817
            </div>
        </Wrapper>

    )
}
