'use client'

import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

const InstagramPost = ({ imageUrl, postUrl }) => {
  const [imageScale, setImageScale] = useState(0.4),
    [opacity, setOpacity] = useState(0)

  const postRef = useRef(null)

  useEffect(() => {
    const instagramPost = postRef.current

    const handleMouseEnter = () => {
      setImageScale(1)
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setImageScale(0.4)
      setOpacity(0)
    }

    instagramPost.addEventListener('mouseenter', handleMouseEnter)
    instagramPost.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      instagramPost.removeEventListener('mouseenter', handleMouseEnter)
      instagramPost.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <Link ref={postRef} href={'https://instagram.com'} target='_blank'>
      <div className='relative w-full pb-[100%]'>
        <Image
          className='object-cover'
          src={`/demo/${imageUrl}`}
          alt='Featured Instagram posts'
          fill
        />
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 min-w-8 min-h-8 bg-[url("/demo/instagram-white.svg")] bg-primary bg-center bg-[length:44%] bg-no-repeat rounded-full transition-all duration-500'
          style={{ opacity: `${opacity}`, scale: `${imageScale}` }}></div>
      </div>
    </Link>
  )
}

export default InstagramPost