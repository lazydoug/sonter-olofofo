'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

import UnderlineLinkText from './UnderlineLinkText'

const HeroSection = ({
  backgroundImage,
  header,
  title,
  subtitle,
  singlePost,
  category,
  verifiedArtist,
}) => {
  const { scrollY } = useScroll() // Get scroll position

  // Background animations
  const translateY = useTransform(scrollY, [0, 300], ['0%', '20%'])
  const scale = useTransform(scrollY, [0, 300], [1.06, 1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Content animations
  const contentTranslateY = useTransform(scrollY, [0, 300], ['0vh', '30vh'])
  const contentScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section>
      <div className='absolute bottom-0 left-0 right-0 top-0 -z-10 h-screen w-full min-w-80 overflow-hidden'>
        <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-[rgba(21,_21,_21,_0.4)] from-30% to-black to-50% min-[479px]:to-80% min-[767px]:to-70% min-[991px]:to-80%'></div>

        <motion.div
          className='absolute bottom-0 left-0 right-0 top-0 h-[50vh] min-h-[360px] bg-cover bg-center bg-no-repeat min-[479px]:h-screen min-[767px]:h-[70vh] min-[991px]:h-screen'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: translateY,
            scale: scale,
            opacity: opacity,
          }}
          transition={{ ease: 'linear', duration: 0 }}
        ></motion.div>
      </div>

      <motion.div
        className={`px-4 pb-20 pt-[120px] text-white min-[767px]:pb-28 min-[767px]:pt-40 min-[991px]:min-h-[520px] min-[991px]:pb-40 min-[991px]:pt-[200px] ${
          title == 'Music' && 'min-[479px]:pb-40 min-[479px]:pt-[200px]'
        }`}
        style={{
          y: contentTranslateY,
          scale: contentScale,
          opacity: contentOpacity,
        }}
        transition={{ ease: 'linear', duration: 0 }}
      >
        <div className='mx-auto max-w-[800px] text-center'>
          <hgroup>
            <header
              className={`mb-4 text-[11px] font-semibold uppercase leading-4 tracking-[3px] ${singlePost && 'flex justify-center'}`}
            >
              <span>{header}</span>
              {singlePost && (
                <UnderlineLinkText
                  className='text-inherit'
                  href={`/categories/${category.toLowerCase()}`}
                >
                  &nbsp;{category}
                </UnderlineLinkText>
              )}
            </header>
            <h1 className='relative mb-6 mt-2 text-h2 capitalize min-[767px]:text-[40px] min-[767px]:leading-[48px] min-[991px]:text-h1'>
              {title}
              {verifiedArtist && (
                <span className='absolute top-1/2 ml-2 inline-block w-5 -translate-y-1/2 rounded-full bg-blue-500 text-sm font-bold'>
                  ☆
                </span>
              )}
            </h1>
          </hgroup>
          <hr className='mx-auto w-[88px] border-2 border-white min-[767px]:w-[120px]' />
          {subtitle && (
            <p className='mt-6 text-md min-[767px]:text-lg'>{subtitle}</p>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
