import localFont from 'next/font/local'
import './globals.css'

const neueMachina = localFont({
  src: '../../public/fonts/NeueMachina-Regular.otf',
})

export const metadata = {
  title: 'Sonter Olofofo',
  description: 'Olofofo HQ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${neueMachina.className} bg-[#242323]`}>
        {children}
      </body>
    </html>
  )
}
