'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HalfImageCard = () => {
  const [imageScale, setImageScale] = useState(1),
    [dividerWidth, setDividerWidth] = useState('0'),
    [featuredTagtWidth, setFeaturedTagWidth] = useState('32px'),
    [featuredTextWidth, setFeaturedTextWidth] = useState('0px'),
    [featuredTextOpacity, setFeaturedTextOpacity] = useState(0)

  const isFeatured = true,
    bg = '/demo/andrew-neel-1047563-unsplash.jpg'

  //Refs
  const halfImageCard = useRef(null),
    featuredTag = useRef(null),
    divider = useRef(null)

  useEffect(() => {
    const card = halfImageCard.current
    const featured = featuredTag.current
    const hr = divider.current

    const handleMouseEnterCard = () => {
      setImageScale(1.05)
      setDividerWidth('100%')
      // hr.classList.toggle('w-full')
      // hr.classList.toggle('opacity-0')
    }

    const handleMouseLeaveCard = () => {
      setImageScale(1)
      setDividerWidth("0")
      // hr.classList.toggle('w-full')
      // hr.classList.toggle('opacity-100')
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
    featured.addEventListener('mouseenter', handleMouseEnter)
    featured.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnterCard)
      card.removeEventListener('mouseleave', handleMouseLeaveCard)
      featured.removeEventListener('mouseenter', handleMouseEnter)
      featured.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [featuredTextOpacity, featuredTextWidth])

  return (
    <div ref={halfImageCard} className='cursor-pointer'>
      <Link href={''}>
        <div className='relative'>
          {/* featured tag */}
          {isFeatured && (
            <div
              ref={featuredTag}
              className='z-10 absolute top-4 right-4 p-2 rounded-xs bg-primary flex gap-2 items-center cursor-pointer overflow-hidden transition-all ease-in-out duration-300'
              style={{
                width: `${featuredTagtWidth}`,
              }}>
              <Image src='/demo/zap-white.svg' alt='' width={16} height={16} />
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
          <div className='h-[64vw] overflow-hidden'>
            <div
              className='h-full bg-cover bg-center transition-transform ease-in-out duration-500'
              style={{
                backgroundImage: `url(${bg})`,
                transform: `scale(${imageScale}, ${imageScale})`,
              }}></div>
          </div>

          {/* card info */}
          <div className='p-8 bg-white'>
            <span className='inline-block mb-4 px-[6px] py-[2px] border border-grey-400 text-[11px] text-black leading-[16px] font-medium tracking-[1px] rounded-[3px] uppercase'>
              {'Category'}
            </span>

            <h4 className='text-h4 text-black mb-5'>{'Title'}</h4>

            <div className='flex justify-between items-end'>
              <div className='flex flex-col gap-[2px]'>
                <span className='text-btn-sm text-black font-semibold tracking-2'>
                  READ MORE
                </span>
                <hr
                  ref={divider}
                  className='inline-block h-[2px] bg-primary border-none transition-all ease-linear duration-500'
                  style={{
                    width: `${dividerWidth}`,
                  }}
                />
              </div>
              <div className='flex flex-col items-end text-btn-sm text-grey-300'>
                <span>{'Read time'}</span>
                <time dateTime='' className=''>
                  {'Date'}
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
