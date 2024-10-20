'use client'

import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'

const CategoryButton = ({ name, imageSrc }) => {
  const [imageScale, setImageScale] = useState(1),
    [imageOpacity, setImageOpacity] = useState(0)

  const categoryBtnRef = useRef()

  useEffect(() => {
    const categoryBtn = categoryBtnRef.current

    const handleMouseEnter = () => {
      setImageOpacity(1)
      setImageScale(1.1)
    }

    const handleMouseLeave = () => {
      setImageOpacity(0)
      setImageScale(1)
    }

    categoryBtn.addEventListener('mouseenter', handleMouseEnter)
    categoryBtn.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      categoryBtn.addEventListener('mouseenter', handleMouseEnter)
      categoryBtn.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <Link
      ref={categoryBtnRef}
      href={`/categories/${name.toLowerCase()}`}
      className='flex-1'
    >
      <div className='relative overflow-clip rounded-xs border border-white/40 px-5 py-3 text-center text-btn-md uppercase tracking-2 transition-all duration-[400ms] ease-in-out hover:border-transparent'>
        <span>{name}</span>
        <div
          className='overflow- absolute bottom-0 left-0 right-0 top-0 -z-[1] bg-cover bg-center transition-all duration-500 ease-in-out'
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.5), rgba(21, 21, 21, 0.5)), url(${imageSrc})`,
            transform: `scale(${imageScale}, ${imageScale})`,
            opacity: `${imageOpacity}`,
          }}
        ></div>
      </div>
    </Link>
  )
}

export default CategoryButton
