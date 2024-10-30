import Image from 'next/image'
import Link from 'next/link'

import NewsletterForm from './NewsletterForm'
import UnderlineLinkText from './UnderlineLinkText'

const Footer = () => {
  return (
    <footer className='flex flex-col p-4 pt-5 min-[991px]:flex-row min-[991px]:p-6'>
      <div className='flex-1 border border-grey-200 px-[12vw] py-[14vw] text-center min-[479px]:py-[10vw] min-[991px]:p-[4vw] min-[991px]:text-left'>
        <h3 className='mb-7 text-h4'>About</h3>

        <p className='mb-6 text-md text-white/60'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
          quisquam. A nulla necessitatibus assumenda inventore quisquam sed
          ipsum magnam soluta libero. Reiciendis voluptatibus obcaecati
          recusandae quasi, corrupti dolorem ullam beatae?
        </p>

        <Link href='/about' className='text-h6 hover:underline'>
          Read Full Story
        </Link>
      </div>
      <div className='flex-1 border border-grey-200 px-[12vw] py-[14vw] text-center min-[479px]:px-[18vw] min-[479px]:py-[10vw] min-[767px]:px-[24vw] min-[991px]:p-[4vw]'>
        <h3 className='mb-7 text-h4'>Newsletter</h3>

        <div className='mb-6'>
          <NewsletterForm transparent />
        </div>

        {/*Social Media*/}
        <div className='mx-auto flex w-fit gap-2'>
          <Link
            href='https://x.com/'
            className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#2aa3f0]'
          >
            <Image
              src='/demo/twitter-white.svg'
              alt='x-twitter-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://facebook.com/'
            className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#3b5998]'
          >
            <Image
              src='/demo/facebook-white.svg'
              alt='facebook-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://instagram.com/'
            className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-primary'
          >
            <Image
              src='/demo/instagram-white.svg'
              alt='instagram-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://pinterest.com/'
            className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#f83f5a]'
          >
            <Image
              src='/demo/pinterest-white.svg'
              alt='pinterest-icon'
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-[14vw] border border-grey-200 px-[12vw] pt-[14vw] min-[479px]:gap-[10vw] min-[479px]:pt-[10vw] min-[991px]:p-[4vw] min-[991px]:pb-0'>
        <div className='text-center'>
          <h3 className='mb-7 text-h4 min-[991px]:text-right'>Navigation</h3>

          <ul className='mb-5 flex flex-wrap justify-center gap-x-5 gap-y-3 min-[991px]:justify-end'>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Lorem
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Ipsum
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Dolor
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Sit
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Amet
              </Link>
            </li>
          </ul>

          <ul className='flex justify-center gap-4 min-[991px]:justify-end'>
            <li>
              <Link
                href='/contact'
                className='text-xs text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-xs text-white/60 transition-colors duration-300 ease-in-out hover:text-white'
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className='-mx-[12vw] mt-auto border-t border-grey-200 p-[6vw] text-center text-[11px] leading-4 text-white/60 min-[479px]:p-[4vw] min-[767px]:py-[3vw] min-[991px]:-mx-[4vw] min-[991px]:text-right'>
          <span>Created with ❤️ by &nbsp;</span>
          <span className='inline-block'>
            <UnderlineLinkText href='' className='text-white' footer>
              Lazy Doug
            </UnderlineLinkText>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
