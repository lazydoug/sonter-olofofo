'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FullImageCard = ({
  title,
  thumbnail,
  category,
  date,
  readTime,
  isFeatured,
  style,
  bigPreview,
}) => {
  const [imageScale, setImageScale] = useState(1),
    [underlineWidth, setUnderlineWidth] = useState('0'),
    [featuredTagtWidth, setFeaturedTagWidth] = useState('32px'),
    [featuredTextWidth, setFeaturedTextWidth] = useState('0px'),
    [featuredTextOpacity, setFeaturedTextOpacity] = useState(0)

  //Refs
  const fullImageCard = useRef(null),
    featuredTag = useRef(null)

  useEffect(() => {
    const card = fullImageCard.current
    const featured = featuredTag.current

    const handleMouseEnterCard = () => {
      setImageScale(1.05)
      setUnderlineWidth('100%')
    }

    const handleMouseLeaveCard = () => {
      setImageScale(1)
      setUnderlineWidth('0')
    }

    const handleMouseEnterTag = () => {
      setFeaturedTagWidth('118.175px')
      setFeaturedTextWidth('auto')
      setFeaturedTextOpacity(1)
    }

    const handleMouseLeaveTag = () => {
      setFeaturedTagWidth('32px')
      setFeaturedTextWidth('0px')
      setFeaturedTextOpacity(0)
    }

    card.addEventListener('mouseenter', handleMouseEnterCard)
    card.addEventListener('mouseleave', handleMouseLeaveCard)

    // Attach event listeners for the featured tag (if it exists)
    if (featured) {
      featured.addEventListener('mouseenter', handleMouseEnterTag)
      featured.addEventListener('mouseleave', handleMouseLeaveTag)
    }

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnterCard)
      card.removeEventListener('mouseleave', handleMouseLeaveCard)

      if (featured) {
        featured.removeEventListener('mouseenter', handleMouseEnterTag)
        featured.removeEventListener('mouseleave', handleMouseLeaveTag)
      }
    }
  }, [])

  return (
    <div ref={fullImageCard} className={style}>
      <Link href={''}>
        <div
          className={`${
            bigPreview
              ? 'h-[328px] min-[479px]:h-[64vw] min-[991px]:h-[496px]'
              : 'h-[90vw] min-h-[400px] min-[479px]:h-full min-[479px]:min-h-[56vw] min-[991px]:min-h-[400px]'
          } relative`}>
          {/* featured tag */}
          {isFeatured && (
            <div
              ref={featuredTag}
              className='z-10 absolute top-4 right-4 p-2 rounded-xs bg-primary flex gap-2 items-center cursor-pointer overflow-hidden transition-all ease-in-out duration-300'
              style={{
                width: `${featuredTagtWidth}`,
              }}>
              <Image
                src='/demo/zap-white.svg'
                alt='zap-icon'
                width={16}
                height={16}
              />
              <span
                className='text-btn-sm text-white tracking-2 transition-all duration-300'
                style={{
                  width: `${featuredTextWidth}`,
                  opacity: `${featuredTextOpacity}`,
                }}>
                FEATURED
              </span>
            </div>
          )}

          {/* card image */}
          <div className='absolute top-0 right-0 bottom-0 left-0 overflow-hidden'>
            <div
              className='h-full bg-cover bg-center transition-transform ease-in-out duration-500'
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(21, 21, 21, 0) 30%, rgba(21, 21, 21, 0.8)), url(${thumbnail})`,
                transform: `scale(${imageScale}, ${imageScale})`,
              }}></div>

            {/* card info */}
            <div className='p-6 absolute flex flex-col bottom-0 left-0 right-0 min-[479px]:h-60'>
              <span className='w-fit mb-4 px-[6px] py-[2px] border border-grey-400 text-[11px] text-white leading-[16px] font-medium tracking-[1px] rounded-[3px] uppercase'>
                {category || 'Category'}
              </span>

              <h4
                className={`${
                  bigPreview ? 'text-h3 min-[767px]:text-h2' : 'text-h4'
                } text-white line-clamp-3 mb-5`}>
                {title || 'Title'}
              </h4>

              <div className='mt-auto flex gap-5 justify-between items-end'>
                <div className='flex flex-col gap-[2px]'>
                  <span className='text-btn-sm text-white font-semibold tracking-2'>
                    READ MORE
                  </span>
                  <hr
                    className='inline-block h-[2px] bg-primary border-none transition-all ease-linear duration-500'
                    style={{
                      width: `${underlineWidth}`,
                    }}
                  />
                </div>

                <div className='flex flex-col items-end text-btn-sm text-white'>
                  <span>{readTime || 'Read time'}</span>
                  <time dateTime='' className='text-right'>
                    {date || 'Date'}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FullImageCard
