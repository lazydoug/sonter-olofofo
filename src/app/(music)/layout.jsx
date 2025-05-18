import { Bricolage_Grotesque } from 'next/font/google'
import '@/app/globals.css'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

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
        className={`${bricolageGrotesque.className} min-w-80 scroll-smooth bg-black selection:bg-black selection:text-primary`}
      >
        <NavBar dark/>
        {children}
      </body>
    </html>
  )
}
