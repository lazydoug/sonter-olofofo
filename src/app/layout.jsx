import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

import Footer from '@/components/common/Footer'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Sonter Olofofo',
  description: 'Olofofo HQ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${bricolageGrotesque.className} bg-black scroll-smooth min-w-80 selection:text-primary selection:bg-black`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
