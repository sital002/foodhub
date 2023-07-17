"use client"
import Image from 'next/image';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
import nonVegImg from "@assets/non-veg-resturant.png"
import Wrapper from '@components/wrapper/wrapper';


const Details = () => {
    return (
<Wrapper>

        <div className="flex justify-center py-3 items-center border-2 border-red-500 shadow-md shadow-red-50 gap-10">
            <div>
                <Image src={nonVegImg} height={100} width={100} alt='Product Image'/>
            </div>
            <div >
                <h1 className="text-3xl font-bold">Murga Fry</h1>
                <p className="bg-blue-500 text-white px-2 rounded-md my-3 w-fit cursor-pointer">Baishnab Resturant</p>
                <div className='flex my-4'>
                <BsStarFill className='text-orange-500 mr-3 text-xl'/>
                <BsStarFill className='text-orange-500 mr-3 text-xl'/>
                <BsStarFill className='text-orange-500 mr-3 text-xl'/>
                <BsStarHalf className='text-orange-500 mr-3 text-xl'/>
                </div>
                <p className="font-bold text-[10px] text-red-500">Old Price: <span className="text-sm line-through">Rs 1200</span></p>
                <p className="font-bold text-[15px] my-1">New Price: <span className="text-sm">Rs 900</span> <span className="text-green-500 text-sm">(-5%)</span></p>
                <div className="flex  my-1 px-2 h-9">
                <button className='px-3 bg-gray-400 mr-1 rounded-md'>+</button>
                {/* <span className="mx-4 text-center">1</span> */}
                <input type="text"  className='w-[30px] border-2 border-b-slate-950 px-2 py-1'/>
                <button className='px-3 bg-gray-400 ml-1 rounded-md'>-</button>
                </div>
                <button className="bg-red-500 cursor-pointer px-2 py-2 text-white rounded-3xl">Add to Cart</button>
            </div>
        </div>
</Wrapper>

    )
}

export default Details