'use client'

import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'

const PostTag = ({ tag }) => {
  const [underlineWidth, setUnderlineWidth] = useState('0')

  const hashTagRef = useRef(null)

  useEffect(() => {
    const hashTag = hashTagRef.current

    const handleMouseEnter = () => setUnderlineWidth('100%'),
      handleMouseLeave = () => setUnderlineWidth('0')

    hashTag.addEventListener('mouseenter', handleMouseEnter)
    hashTag.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hashTag.removeEventListener('mouseenter', handleMouseEnter)
      hashTag.removeEventListener('mouseleave', handleMouseLeave)
    }
  })
  return (
    <Link
      ref={hashTagRef}
      href={`/tags/${tag}`}
      className='flex flex-col gap-[2px]'>
      <span className='text-btn-sm text-white font-semibold capitalize'>
        {`#${tag}`}
      </span>
      <hr
        className='inline-block h-[2px] bg-primary border-none transition-all ease-linear duration-500'
        style={{
          width: `${underlineWidth}`,
        }}
      />
    </Link>
  )
}

export default PostTag
