import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Silver Restaurant',
  description: 'Silver Restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} bg-[#383724] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
