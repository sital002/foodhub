import Image, { StaticImageData } from 'next/image'
import React from 'react'
import vegImg from '../../assets/veg-resturant.png'

interface CategoryProsps{
  img:StaticImageData
  alt:string
  title:string
}
const CategoryCard : React.FC<CategoryProsps> = ({img,alt,title}) => {
  return (
    <div className='max-w-xs w-full cursor-pointer mr-4 my-2 inline-block rounded-2xl p-3 shadow-lg border-solid border-2 ease-in duration-200 hover:border-sky-500'>
        <Image
        className='w-48 mx-auto' 
         src={img} alt={alt} />
        <p className='text-center text-xl my-2 font-bold'>{title}</p>
    </div>
  )
}

export default CategoryCard