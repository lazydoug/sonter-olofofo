'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

const UnderlineLinkText = ({
  children,
  href,
  className,
  footer,
  onClickHandler,
  underlineBig,
}) => {
  const [underlineWidth, setUnderlineWidth] = useState('0')

  const textContainerRef = useRef()

  useEffect(() => {
    const textContainer = textContainerRef.current

    const handleMouseEnter = () => {
      setUnderlineWidth('100%')
    }

    const handleMouseLeave = () => {
      setUnderlineWidth('0')
    }

    textContainer.addEventListener('mouseenter', handleMouseEnter)
    textContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      textContainer.removeEventListener('mouseenter', handleMouseEnter)
      textContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  const height = (footer && '1px') || (underlineBig && '4px') || '2px'

  return (
    <Link
      ref={textContainerRef}
      href={href}
      onClick={onClickHandler}
      className='flex flex-col gap-1 w-fit'
    >
      <span className={className || 'text-h6 !font-normal'}>{children}</span>
      <hr
        className='inline-block border-none bg-primary transition-all duration-300 ease-linear'
        style={{
          height: height,
          width: `${underlineWidth}`,
        }}
      />
    </Link>
  )
}

export default UnderlineLinkText
