import './globals.css'
import './locomotive.css'
import { Inter } from 'next/font/google'
import AnimatedCursorComponent from '@/components/AnimatedCursor'
import Script from 'next/script'  // Import Next.js Script component

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sudhanshu Ranjan 😎',
  description: 'I am a full stack developer. I love to build things that make a difference.',
  metadataBase: new URL('https://sudhanshur.vercel.app/'),
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
  siteUrl: 'https://sudhanshur.vercel.app',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-in': '/en-IN',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Clarity Tracking Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_TRACKING_CODE");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnimatedCursorComponent>
          {children}
        </AnimatedCursorComponent>
      </body>
    </html>
  )
}
