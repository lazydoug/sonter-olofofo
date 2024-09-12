import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

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
      <body className={`${bricolageGrotesque.className} bg-black scroll-smooth`}>{children}</body>
    </html>
  )
}