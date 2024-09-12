'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import UnderConstruction from './under-construction'

export default function Home() {
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 768 ? setDesktop(true) : setDesktop(false)

    handleResize()

    window.addEventListener('resize', () => {
      handleResize()
    })

    return window.removeEventListener('resize', () => {
      handleResize()
    })
  }, [])

  return desktop ? (
    <UnderConstruction />
  ) : (
    <UnderConstruction />
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    //   <div></div>
    // </main>
  )
}
