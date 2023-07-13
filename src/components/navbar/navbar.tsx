import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center shadow-lg p-3'>
        <div><Link href='/'><span>FoodHub</span></Link></div>
        <ul className='flex justify-center gap-3 '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/explore">Explore</Link></li>
        </ul>
        <div>
        <button className='mr-2 rounded-3xl px-4 py-1 tracking-widest border-2 border-black '><Link href='/signin'>Sign In</Link></button>
        <button className='bg-red-500 px-4 rounded-3xl text-white py-1.5 tracking-wider'><Link href='/signup'>Sign Up</Link></button>
        </div>
    </nav>
  )
}

export default Navbar