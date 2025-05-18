'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, useAnimationControls } from 'framer-motion'

import UnderlineLinkText from './UnderlineLinkText'

const NavBar = ({ dark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false)

  const socials = [
      {
        name: 'x-twitter',
        url: 'https://x.com/',
        icon: 'twitter-white.svg',
        style: 'hover:bg-[#2aa3f0]',
      },
      {
        name: 'facebook',
        url: 'https://facebook.com/',
        icon: 'facebook-white.svg',
        style: 'hover:bg-[#3b5998]',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/',
        icon: 'instagram-white.svg',
        style:
          'hover:bg-[linear-gradient(72.44deg,_#FF7A00_11.92%,_#FF0169_51.56%,_#D300C5_85.69%)]',
      },
      {
        name: 'pinterest',
        url: 'https://pinterest.com/',
        icon: 'pinterest-white.svg',
        style: 'hover:bg-[#f83f5a]',
      },
      // {
      //   name: 'mail',
      //   url: 'mailto:mail@samplemail.com',
      //   icon: 'send-white.svg',
      //   style: 'hover:bg-[#e31e24]',
      // },
    ],
    navLinks = [
      { label: 'Home', href: '/' },
      { label: 'All Posts', href: '/posts' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    categoryLinks = [
      { label: 'Cars', href: '/cars' },
      { label: 'Food', href: '/food' },
      { label: 'Style', href: '/style' },
      { label: 'Tech', href: '/tech' },
      { label: 'Travel', href: '/travel' },
    ]

  const navMenuControls = useAnimationControls(),
    navLinksControls = useAnimationControls(),
    navCategoriesControls = useAnimationControls(),
    navBigTextControls = useAnimationControls(),
    navCloseIconControls = useAnimationControls(),
    hamburgerIconControls = useAnimationControls()

  const searchBoxControls = useAnimationControls(),
    searchCloseIconControls = useAnimationControls(),
    searchFormControls = useAnimationControls(),
    searchBigTextControls = useAnimationControls()

  useEffect(() => {
    if (isMenuOpen) {
      hamburgerIconControls.start('hidden')
      navCloseIconControls.start('visible')
      navMenuControls.start('visible')
      navLinksControls.start('visible')
      navCategoriesControls.start('visible')
      navBigTextControls.start('visible')
    } else {
      hamburgerIconControls.start('visible')
      navCloseIconControls.start('hidden')
      navMenuControls.start('hidden')
      navLinksControls.start('hidden')
      navCategoriesControls.start('hidden')
      navBigTextControls.start('hidden')
    }

    if (isSearchBoxOpen) {
      searchBoxControls.start('visible')
      searchCloseIconControls.start('visible')
      searchFormControls.start('visible')
      searchBigTextControls.start('visible')
    } else {
      searchBoxControls.start('hidden')
      searchCloseIconControls.start('hidden')
      searchFormControls.start('hidden')
      searchBigTextControls.start('hidden')
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const blurThreshold = 200

      if (scrollY > blurThreshold) {
        setIsBlurred(true)
      } else {
        setIsBlurred(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const toggleSearchBox = () => {
    setIsSearchBoxOpen((prev) => !prev)
  }

  return (
    <header
      className={`fixed z-30 w-full min-w-80 ${dark && isBlurred ? 'bg-black':'' } bg-gradient-to-b from-black/60 to-transparent p-4 ${isBlurred ? 'backdrop-blur-sm' : 'backdrop-blur-none'} transition-all duration-300 min-[479px]:p-5 min-[767px]:p-8`}
    >
      <nav className='flex items-center justify-between text-[13px] uppercase leading-5 tracking-[3px] text-white'>
        <div
          className='relative flex cursor-pointer items-center'
          onClick={toggleMenu}
        >
          {/* Nav Close Icon */}
          <motion.div
            className='absolute z-50 h-6 w-6'
            animate={navCloseIconControls}
            variants={{
              hidden: {
                scale: 0.4,
                opacity: 0,
                transition: { duration: 0.5 },
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <Image src='/assets/close-white.svg' alt='close_icon' fill />
          </motion.div>

          <motion.div
            className='flex items-center gap-4'
            initial='rest'
            whileHover={isMenuOpen ? 'hidden' : 'hover'}
            whileTap='hidden'
            animate={isMenuOpen ? 'hidden' : 'rest'}
          >
            {/* Hamburger Icon */}
            <motion.div
              className='z-50 flex w-6 flex-col items-center gap-1'
              transition={{ duration: 0.3 }}
              variants={{
                hidden: {
                  scale: 0.4,
                  opacity: 0,
                },
                rest: {
                  rotate: 45,
                  opacity: 1,
                  scale: 1,
                },
                hover: {
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                },
              }}
            >
              <motion.div
                className='h-[2px] rounded-[1px] bg-white'
                variants={{
                  rest: { width: '50%' },
                  hover: { width: '100%' },
                }}
              ></motion.div>
              <div className='h-[2px] w-full rounded-[1px] bg-white'></div>
              <motion.div
                className='h-[2px] rounded-[1px] bg-white'
                variants={{
                  rest: { width: '50%' },
                  hover: { width: '100%' },
                }}
              ></motion.div>
            </motion.div>
            <span className='z-50 hidden min-[767px]:inline-block'>Menu</span>
          </motion.div>
        </div>

        {/* Nav Menu */}
        <motion.div
          className='fixed bottom-0 left-0 right-0 top-0 z-40 mb-4 hidden h-screen bg-black px-[60px] pb-2 pt-20 min-[767px]:px-[14%] min-[767px]:py-[104px]'
          animate={navMenuControls}
          variants={{
            hidden: {
              opacity: 0,
              display: 'none',
              transition: { duration: 0.5 },
            },
            visible: {
              display: 'block',
              opacity: 1,
              transition: { duration: 0.5 },
            },
          }}
        >
          {/* social links */}
          <div className='absolute right-[10px] top-[10px] flex items-center gap-4 min-[479px]:right-[14px] min-[479px]:top-[14px] min-[767px]:right-[26px] min-[767px]:top-[26px]'>
            <span className='hidden min-[479px]:block'>Follow</span>
            <hr className='hidden h-[2px] w-14 border-0 bg-white/50 min-[479px]:block' />
            <div className='flex gap-2'>
              {socials.map(({ name, url, icon, style }) => (
                <Link
                  key={name}
                  href={url}
                  className={`rounded-full bg-white/[0.08] p-[10px] transition-colors duration-500 ease-in-out ${style}`}
                >
                  <div className='relative h-4 w-4'>
                    <Image src={`/assets/${icon}`} alt={`${name}-icon`} fill />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div className='flex flex-col gap-28 min-[479px]:flex-row'>
            <motion.ul
              className='mb-3 mt-5 flex-1 space-y-16 text-[28px] font-medium capitalize leading-5'
              animate={navLinksControls}
              variants={{
                hidden: {
                  x: 60,
                  opacity: 0,
                  transition: { duration: 0.5 },
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.1 },
                },
              }}
            >
              {navLinks.map(({ label, href }) => {
                return (
                  <li key={label} onClick={() => setIsMenuOpen(false)}>
                    <UnderlineLinkText
                      href={href}
                      className='text-[1.75rem] leading-8 min-[767px]:text-[2.5rem] min-[767px]:leading-10 min-[991px]:text-5xl min-[991px]:leading-10'
                      underlineBig
                    >
                      {label}
                    </UnderlineLinkText>
                  </li>
                )
              })}
            </motion.ul>

            <motion.div
              className='flex-1 min-[479px]:pt-4 min-[767px]:pt-5'
              animate={navCategoriesControls}
              variants={{
                hidden: {
                  x: 60,
                  opacity: 0,
                  transition: { duration: 0.5 },
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
            >
              <h4 className='mb-8 text-h4 capitalize min-[479px]:mb-10'>
                Categories
              </h4>
              <ul className='space-y-5 text-h6 tracking-2'>
                {categoryLinks.map(({ label, href }) => {
                  return (
                    <li key={label} onClick={() => setIsMenuOpen(false)}>
                      <UnderlineLinkText
                        href={`/categories${href}`}
                        className='leading-none'
                      >
                        {label}
                      </UnderlineLinkText>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </div>

          {/* Nav Menu Big Text */}
          <motion.div
            className='absolute left-[6vw] top-1/2 -z-10 -ml-[15vw] hidden -translate-y-1/2 text-[25vw] font-semibold uppercase leading-[23vw] tracking-[3vw] text-[#ffffff08] min-[479px]:block'
            animate={navBigTextControls}
            variants={{
              hidden: {
                x: 60,
                opacity: 0,
                transition: { duration: 0.5 },
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            style={{
              translateY: '-50%',
            }}
          >
            Sonter
          </motion.div>
        </motion.div>

        <Link
          className='text-h5 font-semibold tracking-2 min-[767px]:text-h3'
          href='/'
        >
          Sonter Olofofo
        </Link>

        <div className='flex cursor-pointer gap-4' onClick={toggleSearchBox}>
          <span className='hidden min-[767px]:inline-block'>Search</span>
          <Image
            src='/assets/search-white.svg'
            alt='search_icon'
            width={20}
            height={20}
          />
        </div>

        {/* Search Box */}
        <motion.div
          className='min-[767px]:px-30 fixed bottom-0 left-0 right-0 top-0 z-30 mb-4 hidden h-screen bg-black px-4 min-[479px]:px-14'
          animate={searchBoxControls}
          variants={{
            hidden: {
              opacity: 0,
              display: 'none',
              transition: { duration: 0.5 },
            },
            visible: {
              display: 'block',
              opacity: 1,
              transition: { duration: 0.5 },
            },
          }}
        >
          {/* Search Close Icon */}
          <motion.div
            onClick={toggleSearchBox}
            className='absolute right-[18px] top-5 h-6 w-6 cursor-pointer min-[479px]:right-[22px] min-[479px]:top-6 min-[767px]:right-[30px] min-[767px]:top-9'
            animate={searchCloseIconControls}
            whileHover={{
              rotate: 90,
              transition: {
                duration: 0.3,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            variants={{
              hidden: {
                scale: 0.4,
                opacity: 0,
                transition: { duration: 0.5 },
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <Image src='/assets/close-white.svg' alt='close_icon' fill />
          </motion.div>

          {/* Search Form */}
          <motion.form
            action=''
            className='relative top-1/2 mx-auto w-full max-w-3xl -translate-y-1/2'
            animate={searchFormControls}
            variants={{
              hidden: {
                x: -60,
                y: '-50%',
                opacity: 0,
                transition: { duration: 0.5 },
              },
              visible: {
                x: 0,
                y: '-50%',
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <input
              className='w-full border-b-[3px] border-grey-200 bg-transparent text-center text-[1.25rem] leading-[3.5rem] tracking-normal text-white outline-none transition-colors duration-700 ease-in-out placeholder:text-white hover:border-grey-300 focus:border-primary min-[767px]:pb-4 min-[767px]:text-[2.5rem]'
              type='search'
              id=''
              name=''
              placeholder='What are you looking for?'
              aria-label='What are you looking for?'
            />
          </motion.form>

          {/* Search Box Big Text */}
          <motion.div
            className='absolute left-[6vw] top-1/2 -z-10 -ml-[15vw] hidden -translate-y-1/2 text-[25vw] font-semibold uppercase leading-[23vw] tracking-[3vw] text-[#ffffff08] min-[479px]:block'
            animate={searchBigTextControls}
            variants={{
              hidden: {
                x: -60,
                y: '-50%',
                opacity: 0,
                transition: { duration: 0.5 },
              },
              visible: {
                x: 0,
                y: '-50%',
                opacity: 1,
                transition: { duration: 0.5, delay: 0.1 },
              },
            }}
          >
            Search
          </motion.div>
        </motion.div>
      </nav>
    </header>
  )
}

export default NavBar
