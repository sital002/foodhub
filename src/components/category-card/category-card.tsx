import Image from 'next/image'
import React from 'react'
import vegImg from '../../assets/veg-resturant.png'

const CategoryCard = () => {
  return (
    <div className='max-w-xs w-full cursor-pointer mr-4 my-2 inline-block rounded-2xl p-3 shadow-lg border-solid border-2 ease-in duration-200 hover:border-sky-500'>
        <Image
        className='w-48 mx-auto' 
         src={vegImg} alt="VEg Resturant" />
        <p className='text-center text-xl my-2 font-bold'>Veg Resturant</p>
    </div>
  )
}

export default CategoryCard