import './globals.css'
import './locomotive.css'
import { Inter } from 'next/font/google'
import AnimatedCursorComponent from '@/components/AnimatedCursor'

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
       <AnimatedCursorComponent>
        {children}
       </AnimatedCursorComponent>
      </body>
    </html>
  )
}
