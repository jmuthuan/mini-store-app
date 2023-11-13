//import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Red_Hat_Display} from'next/font/google'
import { icons } from 'react-icons'

const red_hat = Red_Hat_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Midu Store',
  description: 'Mini Store App',  
 
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },    
  ],
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={red_hat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
