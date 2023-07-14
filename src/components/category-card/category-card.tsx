import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CategoryProsps{
  img:StaticImageData
  alt:string
  title:string
}
const CategoryCard : React.FC<CategoryProsps> = ({img,alt,title}) => {
  return (
<div className='cursor-pointer my-2 rounded-2xl p-3 shadow-lg border-solid border-2 ease-in duration-200 sm:inline-block sm:mr-2 hover:border-sky-500'>
  <Image className='w-48 mx-auto' src={img} alt={alt} />
  <p className='text-center text-xl my-2 font-bold'>{title}</p>
</div>


  )
}

export default CategoryCard