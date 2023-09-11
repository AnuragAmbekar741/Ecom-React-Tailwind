
import TopNavbar from '@/components/TopNavbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import BottomNavbar from '@/components/BottomNavbar'

const roboto = Roboto({
  weight: ['100','300','400','500','700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rhea Vania',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <TopNavbar/>
        <BottomNavbar/>
        {children}
      </body>
    </html>
  )
}
