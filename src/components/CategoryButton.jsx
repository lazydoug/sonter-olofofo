'use client'

import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'

const CategoryButton = ({ category, categoryImg }) => {
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
      href={`/categories/${category.toLowerCase()}`}
      className='relative px-5 py-3 text-btn-md tracking-2 border border-white/40 rounded-xs overflow-clip uppercase flex-1 text-center hover:border-transparent transition-all ease-in-out duration-[400ms]'>
      <span>{category}</span>
      <div
        className='absolute -z-[1] top-0 left-0 right-0 bottom-0 bg-cover bg-center overflow- transition-all ease-in-out duration-500'
        style={{
          backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${categoryImg})`,
          transform: `scale(${imageScale}, ${imageScale})`,
          opacity: `${imageOpacity}`,
        }}></div>
    </Link>
  )
}

export default CategoryButton
