"use client"
import { BsStarFill,BsStarHalf } from 'react-icons/bs';

const Details = () => {
    return (
        <div className="flex justify-center items-center border-2 p-4 border-red-500 shadow-md shadow-red-50 w-[1000px] mt-10 ml-10 h-auto ">
            <div>
                <img className="h-[300px]" src="https://th.bing.com/th/id/R.c5de0c118d5fb1d8d23ece32716aa979?rik=l0gqZHQMZgWRAg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-fried-chickenfried-chickenchickendishfried-1411527419655mzrds.png&ehk=WS8HkMEBMrytjuOCUyC7xT1gjxzyJn%2bAWv9%2f9Vp79xk%3d&risl=1&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className=" ml-20">
                <h1 className="text-3xl underline font-bold">Murga Fry</h1>
                <p className="bg-blue-500 text-white px-2 rounded-md my-4 w-fit">Baishnab Resturant</p>
                <div className='flex my-4'>
                <BsStarFill className='text-orange-500 ml-3 text-xl'/>
                <BsStarFill className='text-orange-500 ml-3 text-xl'/>
                <BsStarFill className='text-orange-500 ml-3 text-xl'/>
                <BsStarHalf className='text-orange-500 ml-3 text-xl'/>
                </div>
                
                <p className="font-bold text-[15px] text-red-500">Old Price: <span className="text-sm">Rs 1200</span></p>
                <p className="font-bold text-[15px] my-1">New Price: <span className="text-sm">Rs 900</span> <span className="text-green-500 text-sm">(-5%)</span></p>
                <div className="flex text-3xl my-5 border border-gray-500 w-[100px] px-2">
                <button>+</button>
                <h1 className="mx-4 text-center">1</h1>
                <button>-</button>
                </div>
                <button className="bg-red-500 cursor-pointer p-3 text-white text-xl rounded-3xl">Add to Cart</button>
            </div>
        </div>
    )
}

export default Details