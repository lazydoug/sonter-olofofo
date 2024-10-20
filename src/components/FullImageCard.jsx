'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const FullImageCard = ({
  slug,
  title,
  thumbnail,
  category,
  date,
  bodyLength,
  isFeatured,
  style,
  bigPreview,
  cardVersion1,
  cardVersion2,
}) => {
  //Preset styling
  const defaultPresetStyle =
    'h-[90vw] min-h-[400px] min-[479px]:h-full min-[479px]:min-h-[56vw] min-[991px]:min-h-[400px]'

  const cardStyle =
    (bigPreview && 'h-[328px] min-[479px]:h-[64vw] min-[991px]:h-[496px]') ||
    (cardVersion1 &&
      'h-[90vw] min-h-[400px] min-[479px]:h-full min-[479px]:min-h-[56vw] min-[991px]:min-h-[400px]') ||
    (cardVersion2 &&
      'h-[90vw] min-h-[480px] min-[479px]:h-full min-[991px]:min-h-[480px]') ||
    defaultPresetStyle

  //States
  const [imageScale, setImageScale] = useState(1)
  const [underlineWidth, setUnderlineWidth] = useState('0')
  const [featuredTagtWidth, setFeaturedTagWidth] = useState('32px')
  const [featuredTextWidth, setFeaturedTextWidth] = useState('0px')
  const [featuredTextOpacity, setFeaturedTextOpacity] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  //Refs
  const fullImageCard = useRef(),
    featuredTag = useRef()

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
    <div ref={fullImageCard} className={style}>
      <Link href={`/demo/posts/${slug}`}>
        <div className={`${cardStyle} relative`}>
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

          <div className='relative h-full overflow-hidden'>
            {/* card info */}
            <div className='absolute bottom-0 left-0 right-0 z-[2] flex flex-col p-6 min-[479px]:h-60'>
              <span className='mb-4 w-fit rounded-[3px] border border-grey-400 px-[6px] py-[2px] text-[11px] font-medium uppercase leading-[16px] tracking-[1px] text-white'>
                {category || 'Category'}
              </span>

              <h4
                className={`${
                  bigPreview ? 'text-h3 min-[767px]:text-h2' : 'text-h4'
                } mb-5 line-clamp-3 text-white min-[991px]:line-clamp-2`}
              >
                {title || 'Title'}
              </h4>

              <div className='mt-auto flex items-end justify-between gap-5'>
                <div className='flex flex-col gap-[2px]'>
                  <span className='text-btn-sm font-semibold tracking-2 text-white'>
                    READ MORE
                  </span>
                  <hr
                    className='inline-block h-[2px] border-none bg-primary transition-all duration-500 ease-linear'
                    style={{
                      width: `${underlineWidth}`,
                    }}
                  />
                </div>

                <div className='flex flex-col items-end text-btn-sm text-white'>
                  <span>{`${readTime} mins`}</span>
                  <time dateTime={formattedDate} className='text-right'>
                    {formattedDate}
                  </time>
                </div>
              </div>
            </div>

            {/* overlay gradient */}
            <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] bg-gradient-to-b from-transparent from-30% to-[rgba(21,_21,_21,_0.8)]'></div>

            {/* card image */}
            <Image
              className='object-cover transition-transform duration-500 ease-in-out'
              src={thumbnail}
              alt={title}
              fill
              style={{
                transform: `scale(${imageScale}, ${imageScale})`,
              }}
              onLoad={() => setIsLoading(false)} // Hide placeholder when loaded
            />

            {
              /* placeholder */
              isLoading && (
                <div className='image-placeholder absolute bottom-0 left-0 right-0 top-0'></div>
              )
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FullImageCard
