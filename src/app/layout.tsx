import './globals.css'
import './locomotive.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sudhanshu Ranjan 😎',
  description: 'I am a full stack developer. I love to build things that make a difference.',
  url: 'https://sudhanshur.vercel.app/',
  image: '/images/portfolio.png',
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
  social: {
    twitter: 'https://twitter.com/Sudhanss_u',
    github: 'https://github.com/SudhansuuRanjan',
    linkedin: 'https://www.linkedin.com/in/sudhanshu-ranjan-a1779b202/',
    instagram: 'https://instagram.com/sudhanss_uu',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
