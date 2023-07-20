"use client"
import Image from 'next/image';
import nonVegImg from "@assets/non-veg-resturant.png"
import Wrapper from '@components/wrapper/wrapper';
import ProductCard from '@/components/product-card/product-card';
import { useState } from 'react';


const Details = () => {
    const [quantity, setQuantity] = useState<Number>(1);
    return (
        <Wrapper>
            <div className="md:flex flex-row overflow-hidden">
                <div className='w-screen max-w-md'>
                    <Image src={nonVegImg} alt="non-veg-resturant" objectFit='contain' />
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Veg Spring Roll</h1>
                    <p className='text-gray-50 bg-sky-700 w-fit px-2 my-3 rounded-3xl md:my-5 cursor-pointer'>Baishnab Sweets</p>
                    <p className='text-rose-500 my-3  md:my-5'>NPR 200</p>
                    <p></p>
                    <div className='h-9 flex flex-row'>
                        <div className='border border-gray-300 px-3 w-fit flex justify-center items-center'>
                            <button className='text-xl'  onClick={()=>setQuantity(Number(quantity)-1)}>-</button>
                            <input type="text" className='w-10 mx-2 outline-none border-none bg-inherit p-1 text-center text-gray-600' value={quantity.toString()} onChange={(e)=>setQuantity (Number(e.currentTarget.value))} />
                            <button className='text-xl' onClick={()=>setQuantity(Number(quantity)+1)}>+</button>
                        </div>
                        <button className='ml-3 uppercase font-bold bg-sky-700 py-1 rounded-full h-auto text-slate-100 px-8'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-2xl font-medium my-2'>You might also like</p>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Wrapper>

    )
}

export default Details