'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HalfImageCard = ({
  slug,
  title,
  thumbnail,
  category,
  date,
  bodyLength,
  isFeatured,
  style,
}) => {
  const [imageScale, setImageScale] = useState(1),
    [underlineWidth, setUnderlineWidth] = useState('0'),
    [featuredTagtWidth, setFeaturedTagWidth] = useState('32px'),
    [featuredTextWidth, setFeaturedTextWidth] = useState('0px'),
    [featuredTextOpacity, setFeaturedTextOpacity] = useState(0)

  //Refs
  const halfImageCard = useRef(null),
    featuredTag = useRef(null)

  useEffect(() => {
    const card = halfImageCard.current
    const featured = featuredTag.current

    const handleMouseEnterCard = () => {
      setImageScale(1.05)
      setUnderlineWidth('100%')
    }

    const handleMouseLeaveCard = () => {
      setImageScale(1)
      setUnderlineWidth('0')
    }

    const handleMouseEnter = () => {
      setFeaturedTagWidth('118.175px')
      setFeaturedTextWidth('auto')
      setFeaturedTextOpacity(1)
    }

    const handleMouseLeave = () => {
      setFeaturedTagWidth('32px')
      setFeaturedTextWidth('0px')
      setFeaturedTextOpacity(0)
    }

    card.addEventListener('mouseenter', handleMouseEnterCard)
    card.addEventListener('mouseleave', handleMouseLeaveCard)

    // Attach event listeners for the featured tag (if it exists)
    if (featured) {
      featured.addEventListener('mouseenter', handleMouseEnter)
      featured.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnterCard)
      card.removeEventListener('mouseleave', handleMouseLeaveCard)

      if (featured) {
        featured.removeEventListener('mouseenter', handleMouseEnter)
        featured.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Calculate read time
  const meanWordCharacterCount = 5,
    wordsPerMinute = 200
  const readTime = Math.ceil(
    bodyLength / meanWordCharacterCount / wordsPerMinute
  )

  // Format date
  const d = new Date(date)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(d)

  return (
    <div ref={halfImageCard} className={style}>
      <Link href={`/demo/posts/${slug}`}>
        <div className='relative'>
          {/* featured tag */}
          {isFeatured && (
            <div
              ref={featuredTag}
              className='absolute right-4 top-4 z-10 flex cursor-pointer items-center gap-2 overflow-hidden rounded-xs bg-primary p-2 transition-all duration-300 ease-in-out'
              style={{
                width: `${featuredTagtWidth}`,
              }}
            >
              <Image
                src='/demo/zap-white.svg'
                alt='zap-icon'
                width={16}
                height={16}
              />
              <span
                className='text-btn-sm tracking-2 text-white transition-all duration-300'
                style={{
                  width: `${featuredTextWidth}`,
                  opacity: `${featuredTextOpacity}`,
                }}
              >
                FEATURED
              </span>
            </div>
          )}

          {/* card image */}
          <div className='h-[64vw] overflow-hidden min-[479px]:h-[33vw] min-[991px]:h-64'>
            <div
              className='h-full bg-cover bg-center transition-transform duration-500 ease-in-out'
              style={{
                backgroundImage: `url(${thumbnail})`,
                transform: `scale(${imageScale}, ${imageScale})`,
              }}
            ></div>
          </div>

          {/* card info */}
          <div className='flex flex-col bg-white p-6 min-[479px]:h-60'>
            <span className='mb-4 w-fit rounded-[3px] border border-grey-400 px-[6px] py-[2px] text-[11px] font-medium uppercase leading-[16px] tracking-[1px] text-black'>
              {category || 'Category'}
            </span>

            <h4 className='mb-5 line-clamp-3 text-h4 text-black'>
              {title || 'Title'}
            </h4>

            <div className='mt-auto flex items-end justify-between gap-5'>
              <div className='flex flex-col gap-[2px]'>
                <span className='text-btn-sm font-semibold tracking-2 text-black'>
                  READ MORE
                </span>
                <hr
                  className='inline-block h-[2px] border-none bg-primary transition-all duration-500 ease-linear'
                  style={{
                    width: `${underlineWidth}`,
                  }}
                />
              </div>
              <div className='flex flex-col items-end text-btn-sm text-grey-300'>
                <span>{`${readTime} mins`}</span>
                <time dateTime={formattedDate} className='text-right'>
                  {formattedDate}
                </time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HalfImageCard
