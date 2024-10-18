'use client'

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const FeaturedItem = ({ title, date, category, thumbnail, slug }) => {
  const [imageScale, setImageScale] = useState(1)

  const previewImage = useRef()

  useEffect(() => {
    const image = previewImage.current
    const handleMouseEnter = () => {
      setImageScale(1.05)
    }

    const handleMouseLeave = () => {
      setImageScale(1)
    }

    image.addEventListener('mouseenter', handleMouseEnter)
    image.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      image.removeEventListener('mouseenter', handleMouseEnter)
      image.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <div className='flex gap-5'>
      <Link
        href={`/${slug}`}
        className='relative shrink-0 overflow-hidden rounded-xs'
      >
        <div
          ref={previewImage}
          className='h-[88px] w-[88px] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out'
          style={{
            backgroundImage: `url(${thumbnail})`,
            transform: `scale(${imageScale}, ${imageScale})`,
          }}
        ></div>

        <div className='absolute right-0 top-0 z-10 flex items-center rounded-bl-xs rounded-tr-xs bg-primary p-1'>
          <Image
            src='/demo/zap-white.svg'
            alt='zap-icon'
            width={12}
            height={12}
          />
        </div>
      </Link>

      <div>
        <Link
          href={`/${title.split(' ').join('-').toLowerCase()}`}
          className='hover:underline'
        >
          <h6 className='mb-1 mt-[1px] line-clamp-3 text-h6 capitalize'>
            {title}
          </h6>
        </Link>
        <div className='flex text-[11px] text-white/50'>
          <time dateTime=''>{date}</time>
          <span>&nbsp;in&nbsp;</span>

          <Link
            href={`/category/${category.toLowerCase()}`}
            className='hover:underline'
          >
            {category}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem
