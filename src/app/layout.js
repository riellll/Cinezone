import Navbar from '@/app/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
