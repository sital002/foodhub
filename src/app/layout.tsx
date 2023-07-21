
import './globals.css'
import type { Metadata } from 'next'

import Navbar from '@/components/navbar/navbar'
import { Inter } from 'next/font/google'
import Provider from '@/utils/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoodHub | Home',
  description: 'FoodHub: Convenient food delivery. Browse menus, customize orders, and enjoy delicious cuisines from local restaurants. Easy payments, reliable delivery, and personalized recommendations. Satisfy your cravings with FoodHub.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider >

         <Navbar/>
        <main>
        {children}
        </main>
      </Provider>
        </body>
    </html>
  )
}
