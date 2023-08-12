

const CartItem = () => {
    return (
        <div className='rounded-md flex my-2  shadow-sm shadow-gray-500 justify-between sm:px-5  md:px-16 lg:px-0'>
            <div className='flex items-center p-3 '>
                <div className='flex items-center'>
                    <input type="checkbox" />
                    <img className='h-[60px]' src="https://pluspng.com/img-png/laptop-png-hd-laptop-notebook-png-image-2078.jpg" alt="" />

                </div>
                <div className='ml-5 text-[14px] sm:text-[17px]'>
                    <p>Dell Vostra Laptop 32GB Ram</p>
                    <p className='text-gray-500'>with 256 SSD</p>
                </div>
            </div>

            <div className='text-[14px] p-2 md:flex md:items-center '>
                <div  >
                    <p className='text-orange-500 text-[20px]'>Rs 2000</p>
                    <p className='text-gray-600 line-through'>Rs 2500</p>
                    <p>-45%</p>
                </div>

                <div className='flex my-2 md:ml-32 items-center justify-center'>
                    <p className='px-3 bg-white text-center  text-xl  text-gray-500 cursor-pointer'>-</p>
                    <p className='mx-2'>1</p>
                    <p className='px-3 bg-white text-center  text-xl  text-gray-500 cursor-pointer'>+</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem