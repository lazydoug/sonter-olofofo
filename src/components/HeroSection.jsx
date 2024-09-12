'use client'

import { useEffect, useRef, useState } from 'react'

const HeroSection = () => {
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
          ? 1.06 - (scrollY / heroContentMargins) * (1.06 - 1)
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
          ? 1 - (scrollY / heroContentBottom) * (1 - 0.8)
          : 0.8

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
    <section>
      <div className='absolute z-0 right-0 top-0 left-0 bottom-0 w-full h-[100vh] overflow-hidden'>
        <div className='absolute z-10 right-0 top-0 left-0 bottom-0 bg-gradient-to-b from-[rgba(21,_21,_21,_0.4)] from-30% to-black to-50%'></div>
        <div
          className='absolute right-0 top-0 left-0 bottom-0 h-[50vh] min-h-[360px] bg-[50%_50%] bg-cover bg-no-repeat bg-[url("/demo/tomasz-zagorski-1396867-unsplash.jpg")]'
          style={{
            willChange: 'transform, opacity',
            transform: `translate3d(0px, ${translateY}%, 0px) scale3d(${scale}, ${scale}, 1)`,
            transformStyle: 'preserve-3d',
            opacity: `${opacity}`,
          }}></div>
      </div>

      <div
        ref={heroContent}
        className='relative z-10 px-2 pt-[120px] pb-20'
        style={{
          willChange: 'transform, opacity',
          transform: `translate3d(0px, ${heroContentTranslateY}vh, 0px) scale3d(${heroContentScale}, ${heroContentScale}, 1)`,
          transformStyle: 'preserve-3d',
          opacity: `${heroContentOpacity}`,
        }}>
        <div className='px-2 text-center'>
          <hgroup>
            <p className='text-[11px] leading-4 font-semibold tracking-[0.1875em] mb-4'>
              INTRODUCING OLOFOFO
            </p>
            <h1 className='text-h2 mt-2 mb-6'>News, Trends & Gossips</h1>
          </hgroup>
          <hr className='w-[88px] border-2 border-white mx-auto mb-6' />
          <p className='text-md mb-[70px]'>
            Some dummy text, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis ducimus doloremque officia. Explicabo obcaecati id,
            neque assumenda debitis distinctio ullam ex numquam nulla ipsum
            velit. Velit explicabo hic maiores commodi!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
