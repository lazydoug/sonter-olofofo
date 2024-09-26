'use client'

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const SocialLinks = ({ name, url, icon, style }) => {
  const [rotationDegree, setRotationDegree] = useState(0)
  const [distance, setDistance] = useState(0)

  const socialLinkRef = useRef()

  useEffect(() => {
    const socialLink = socialLinkRef.current

    const handleMouseEnter = () => {
      setRotationDegree(360)
      setDistance(socialLink.offsetHeight / 2 - 20)
    }

    const handleMouseLeave = () => {
      setRotationDegree(0)
      setDistance(0)
    }

    socialLink.addEventListener('mouseenter', handleMouseEnter)
    socialLink.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      socialLink.addEventListener('mouseenter', handleMouseEnter)
      socialLink.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <Link
      ref={socialLinkRef}
      href={url}
      className={`p-[10px] rounded-full bg-white/[0.08] transition-colors duration-500 ease-in-out ${style}`}>
      <div
        className='relative w-4 h-4 lg:w-5 lg:h-5 transition-all duration-1000 ease-in-out'
        style={{
          transformOrigin: 'center',
          transform: `translateY(${distance}px) rotate(${rotationDegree}deg)`,
        }}>
        <Image src={`/assets/${icon}`} alt={`${name}-icon`} fill />
      </div>
    </Link>
  )
}

export default SocialLinks
