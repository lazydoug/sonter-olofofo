'use client'

import { useEffect, useState } from 'react'

import UnderConstruction from '../../components/under-construction'

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

  return desktop ? <UnderConstruction /> : <UnderConstruction />
}
