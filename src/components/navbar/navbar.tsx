"use client"
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session, status } = useSession()


  return (
    <nav className='flex justify-between items-center shadow-lg p-3'>
        <div><Link href='/'><span>FoodHub</span></Link></div>
        <div className='flex justify-center gap-3 max-w-sm w-full'>
          <input type="text" 
          className='px-4 py-2 w-full rounded-3xl bg-gray-100 border-2 border-black ' 
           placeholder='Search Products'/>
        </div>
        <div>
          {
            status === "authenticated" ? (
              <div className='flex justify-center items-center gap-3'>
                <img src={session?.user?.image || ""} className='w-10 h-10 rounded-full' alt={session.user?.name || ""}/>
                <button onClick={() => signOut()} className='bg-red-500 px-4 rounded-3xl text-white py-1.5 tracking-wider'>Sign Out</button>
              </div>
            ) : (
              <div className='flex justify-center items-center gap-3'>
                <button className='mr-2 rounded-3xl px-4 py-1 tracking-widest border-2 '><Link href='/signin'>Sign In</Link></button>
                <button className='bg-red-500 px-4 rounded-3xl text-white py-1.5 tracking-wider'><Link href='/signup'>Sign Up</Link></button>
              </div>
            )
          }
        {/* <button className='mr-2 rounded-3xl px-4 py-1 tracking-widest border-2 '><Link href='/signin'>Sign In</Link></button> */}
        {/* <button className='bg-red-500 px-4 rounded-3xl text-white py-1.5 tracking-wider'><Link href='/signup'>Sign Up</Link></button> */}
        </div>
    </nav>
  )
}

export default Navbar