'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

import HeroSection from '@/components/HeroSection'

const MusicPage = () => {
  const [pageWidth, setPageWidth] = useState()
  const [activeMusicCategory, setActiveMusicCategory] = useState('All')
  const [musicCategoryOffset, setMusicCategoryOffset] = useState()
  const [isStuck, setIsStuck] = useState(false)

  const musicCategoryRef = useRef()

  const { scrollYProgress } = useScroll()

  const springOptions = { stiffness: 10, damping: 5, mass: 1 }

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  // Add background when music category sticks
  useEffect(() => {
    const handleScroll = () => {
      const { top } = musicCategoryRef.current.getBoundingClientRect()

      const width = window.innerWidth

      if (width <= 478) {
        setMusicCategoryOffset(56)
      } else if (width <= 767) {
        setMusicCategoryOffset(64)
      } else {
        setMusicCategoryOffset(96)
      }

      setIsStuck(top <= musicCategoryOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const musicCategories = [
    { genre: 'All' },
    { genre: 'Afro' },
    { genre: 'Blues' },
    { genre: 'Chill' },
    { genre: 'Hip-Hop/Rap' },
    { genre: 'Pop' },
    { genre: 'R&B' },
    { genre: 'Raggae' },
    { genre: 'Rock' },
  ]

  return (
    <>
      <HeroSection
        backgroundImage={
          'https://i8.amplience.net/i/naras/RA_2023_In_Review_AFRICAN_HeroCollage_1644x925'
        }
        header='Category'
        title={'Music'}
      />

      <section className='max-[767px]:pt20 relative z-20 mx-auto grid max-w-[1200px] grid-cols-1 overflow-x-clip px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-8 min-[991px]:pb-[120px]'>
        {/* Music categories */}
        <div
          ref={musicCategoryRef}
          className={ `-mx-10 px-10 no-scrollbar sticky z-10 flex gap-4 overflow-x-scroll pb-4 ${isStuck && 'bg-black'}`}
          style={{ top: musicCategoryOffset }}
        >
          {musicCategories?.map(({ genre }) => (
            <span
              key={genre}
              className={`shrink-0 rounded-full hover:cursor-pointer ${activeMusicCategory === genre ? 'bg-white text-black' : 'bg-neutral-700 font-medium'} px-3 py-1 text-md`}
              onClick={() => setActiveMusicCategory(genre)}
            >
              {genre}
            </span>
          ))}
        </div>


        <h2 className='text-h2 mt-3 mb-[6%]'>Popular Music</h2>
        <div className='mb-[30%] grid gap-14 min-[478px]:grid-cols-2 min-[990px]:grid-cols-3'>
          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['-10%', '70%']
                    : pageWidth >= 478
                      ? ['0%', '60%']
                      : ['-10%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-blue-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-blue-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 1</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['0%', '80%']
                    : pageWidth >= 478
                      ? ['-10%', '70%']
                      : ['-10%', '60%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-indigo-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-indigo-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 2</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['-10%', '60%']
                    : pageWidth >= 478
                      ? ['0%', '65%']
                      : ['-10%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-orange-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-orange-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 3</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['-10%', '70%']
                    : pageWidth >= 478
                      ? ['-10%', '70%']
                      : ['-5%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-yellow-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-yellow-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 4</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['10%', '70%']
                    : pageWidth >= 478
                      ? ['10%', '50%']
                      : ['0%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-rose-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-rose-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 5</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['0%', '50%']
                    : pageWidth >= 478
                      ? ['0%', '40%']
                      : ['10%', '60%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-emerald-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-emerald-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 6</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['0%', '70%']
                    : pageWidth >= 478
                      ? ['10%', '65%']
                      : ['0%', '80%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-lime-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-lime-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 7</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['10%', '95%']
                    : pageWidth >= 478
                      ? ['-15%', '70%']
                      : ['10%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-teal-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-teal-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 8</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['-10%', '80%']
                    : pageWidth >= 478
                      ? ['-5%', '70%']
                      : ['-10%', '80%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-cyan-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-cyan-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 9</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['10%', '80%']
                    : pageWidth >= 478
                      ? ['0%', '50%']
                      : ['-5%', '80%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-fuchsia-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-fuchsia-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 10</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['10%', '100%']
                    : pageWidth >= 478
                      ? ['-10%', '75%']
                      : ['0%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-sky-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-sky-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 11</h4>
              <p>Artist</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              translateY: useSpring(
                useTransform(
                  scrollYProgress,
                  [0, 1],
                  pageWidth >= 990
                    ? ['10%', '80%']
                    : pageWidth >= 478
                      ? ['-5%', '55%']
                      : ['-10%', '70%']
                ),
                springOptions
              ),
            }}
          >
            <div className='relative'>
              <div className='aspect-square w-full rounded-md bg-amber-500'></div>
              <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-5/6 -translate-x-1/2 rounded-md bg-amber-500 opacity-40 blur-xl'></div>
            </div>
            <div>
              <h4 className='mt-5 text-h4'>Music Title 12</h4>
              <p>Artist</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default MusicPage
