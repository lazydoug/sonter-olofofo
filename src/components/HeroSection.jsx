'use client'

import { useEffect, useRef, useState } from 'react'
import UnderlineLinkText from './common/UnderlineLinkText'

const HeroSection = ({
  backgroundImage,
  header,
  title,
  subtitle,
  singlePost,
  category,
}) => {
  const [marginBottom, setMarginBottom] = useState(80),
    [marginTop, setMarginTop] = useState(120),
    [translateY, setTranslateY] = useState(0),
    [scale, setScale] = useState(1.06),
    [opacity, setOpacity] = useState(1),
    [heroContentTranslateY, setHeroContentTranslateY] = useState(0),
    [heroContentScale, setHeroContentScale] = useState(1),
    [heroContentOpacity, setHeroContentOpacity] = useState(1)

  const heroContent = useRef(null)

  useEffect(() => {
    const initialScale = 1.06
    const minScale = 0.8

    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setMarginTop(160)
        setMarginBottom(112)
      } else if (window.innerWidth >= 992) {
        setMarginTop(200)
        setMarginBottom(160)
      } else {
        setMarginTop(120)
        setMarginBottom(80)
      }
    }

    const handleScroll = () => {
      if (!heroContent.current) return //* Adds a safety check

      const heroContentHeight = heroContent.current.offsetHeight,
        heroContentBottom = heroContentHeight - marginBottom,
        heroContentMargins = marginTop + marginBottom,
        scrollY = window.scrollY

      // Calculate hero image translateY
      const tY =
        scrollY <= heroContentMargins ? (scrollY / heroContentMargins) * 20 : 20

      // Calculate hero image scale
      const scale =
        scrollY <= heroContentMargins
          ? initialScale - (scrollY / heroContentMargins) * (initialScale - 1)
          : 1

      // Calculate hero image opacity
      const opacity =
        scrollY <= heroContentMargins ? 1 - scrollY / heroContentMargins : 0

      ////////////

      // Calculate hero content translateY
      const vTranslateY =
        scrollY <= heroContentBottom ? (scrollY / heroContentBottom) * 30 : 30

      // Calculate hero content scale
      const vScale =
        scrollY <= heroContentBottom
          ? 1 - (scrollY / heroContentBottom) * (1 - minScale)
          : minScale

      // Calculate hero content opacity
      const vOpacity =
        scrollY <= heroContentBottom ? 1 - scrollY / heroContentBottom : 0

      setTranslateY(tY)
      setScale(scale)
      setOpacity(opacity)
      setHeroContentTranslateY(vTranslateY)
      setHeroContentScale(vScale)
      setHeroContentOpacity(vOpacity)
    }

    handleResize()
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [marginTop, marginBottom])

  return (
    <div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-full min-w-80 overflow-hidden'>
        <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-[rgba(21,_21,_21,_0.4)] from-30% to-black to-50% min-[479px]:to-80% min-[767px]:to-70% min-[991px]:to-80%'></div>
        <div
          className='absolute bottom-0 left-0 right-0 top-0 h-[50vh] min-h-[360px] bg-cover bg-center bg-no-repeat transition-all duration-0 ease-[ease] min-[479px]:h-screen min-[767px]:h-[70vh] min-[991px]:h-screen'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${translateY}%) scale(${scale}, ${scale})`,
            opacity: `${opacity}`,
          }}
        ></div>
      </div>

      <div
        ref={heroContent}
        className='px-4 pb-20 pt-[120px] transition-all duration-0 ease-[ease] min-[767px]:pb-28 min-[767px]:pt-40 min-[991px]:min-h-[520px] min-[991px]:pb-40 min-[991px]:pt-[200px]'
        style={{
          transform: `translateY(${heroContentTranslateY}vh) scale(${heroContentScale}, ${heroContentScale})`,
          opacity: `${heroContentOpacity}`,
        }}
      >
        <div className='mx-auto max-w-[800px] text-center'>
          <hgroup>
            <header className='mb-4 text-[11px] font-semibold uppercase leading-4 tracking-[3px]'>
              <span> {header}</span>
              {singlePost && (
                <span className='inline-block'>
                  <UnderlineLinkText
                    className='text-inherit'
                    href={`/categories/${category.toLowerCase()}`}
                  >
                    {category}
                  </UnderlineLinkText>
                </span>
              )}
            </header>
            <h1 className='mb-6 mt-2 text-h2 capitalize min-[767px]:text-[40px] min-[767px]:leading-[48px] min-[991px]:text-h1'>
              {title}
            </h1>
          </hgroup>
          <hr className='mx-auto w-[88px] border-2 border-white min-[767px]:w-[120px]' />
          {subtitle && (
            <p className='mt-6 text-md min-[767px]:text-lg'>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
