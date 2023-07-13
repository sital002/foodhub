import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
  return (
    <div className='max-w-xs w-full cursor-pointer mr-4 my-2 inline-block rounded-2xl p-3 shadow-lg border-solid border-2 ease-in duration-200 hover:border-sky-500'>
        <Image
        className='w-48 mx-auto' 
         src="https://merokinmel.com/storage/category/background/6426dccdaf285.png" alt="image" />
        <p className='text-center text-xl my-2 font-bold'>Veg Resturant</p>
    </div>
  )
}

export default CategoryCard