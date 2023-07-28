import React from 'react'
import vegImg from '../../assets/veg-resturant.png'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link href={"/products/1"}>
    <div className='p-1 shadow-lg cursor-pointer border-solid border-2 ease-in duration-200 rounded-lg mx-1 w-[48%] md:w-[32%] lg:w-[24%] inline-block my-1 hover:border-sky-500'>
        <Image src={vegImg} alt="" className='w-60 mx-auto h-48' />
        <p className='px-2 py-1 text-gray-500'>Baisnab Sweets</p>
        <p className='font-bold px-2 '>Veg Spring Roll</p>
        <p className='px-2 py-1 font-bold text-red-500'>NPR: 200</p>
    </div>
    </Link>
  )
}

export default ProductCard