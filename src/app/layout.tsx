"use client"
import './globals.css'
import './locomotive.css'
import { Inter } from 'next/font/google'
import AnimatedCursor from "react-animated-cursor"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sudhanshu Ranjan 😎',
  description: 'I am a full stack developer. I love to build things that make a difference.',
  keywords: [
    'Sudhanshu Ranjan',
    'Sudhanshu',
    'Ranjan',
    'Sudhanshu Ranjan Portfolio',
    'Sudhanshu Ranjan Website',
    'Sudhanshu Ranjan Developer',
    'Sudhanshu Ranjan Full Stack Developer',
    'Sudhanshu Ranjan Full Stack Developer Portfolio',
    'Sudhanshu Ranjan Full Stack Developer Website',
    'Sudhanshu Ranjan Full Stack Developer Website Portfolio',
    ],
    themeColor: '#000000',
    siteUrl: 'https://sudhanshu-ranjan.vercel.app/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor
        innerSize={10}
        outerSize={42}
        color='168, 85, 247'
        innerScale={1.2}
        outerScale={1.5}
        outerStyle={{
          border: '2px solid gray',
          backgroundColor: 'transparent'
        }} />
        {children}
      </body>
    </html>
  )
}
