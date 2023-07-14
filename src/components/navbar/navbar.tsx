import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex justify-center gap-3'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/signin">SignIn</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
        </ul>
    </nav>

  )
}

export default Navbar