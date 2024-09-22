import Image from 'next/image'
import Link from 'next/link'

import NewsletterForm from './NewsletterForm'

const Footer = () => {
  return (
    <footer className='p-4 pt-5 flex flex-col md:bg-[fixed] min-[991px]:p-6 min-[991px]:flex-row'>
      <div className='px-[12vw] py-[14vw] border border-grey-200 text-center flex-1 min-[479px]:py-[10vw] min-[991px]:p-[4vw] min-[991px]:text-left'>
        <h3 className='text-h4 mb-7'>About</h3>

        <p className='text-md text-white/60 mb-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
          quisquam. A nulla necessitatibus assumenda inventore quisquam sed
          ipsum magnam soluta libero. Reiciendis voluptatibus obcaecati
          recusandae quasi, corrupti dolorem ullam beatae?
        </p>

        <Link href='/about' className='text-h6 hover:underline'>
          Read Full Story
        </Link>
      </div>
      <div className='px-[12vw] py-[14vw] border border-grey-200 text-center flex-1 min-[479px]:px-[18vw] min-[479px]:py-[10vw] min-[767px]:px-[24vw] min-[991px]:p-[4vw]'>
        <h3 className='text-h4 mb-7'>Newsletter</h3>

        <div className='mb-6'>
          <NewsletterForm transparent />
        </div>

        <div className='w-fit mx-auto flex gap-2'>
          <Link
            href='https://x.com/'
            className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-[#2aa3f0]'>
            <Image
              src='/demo/twitter-white.svg'
              alt='x-twitter-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://facebook.com/'
            className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-[#3b5998]'>
            <Image
              src='/demo/facebook-white.svg'
              alt='facebook-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://instagram.com/'
            className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-primary'>
            <Image
              src='/demo/instagram-white.svg'
              alt='instagram-icon'
              width={16}
              height={16}
            />
          </Link>

          <Link
            href='https://pinterest.com/'
            className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-[#f83f5a]'>
            <Image
              src='/demo/pinterest-white.svg'
              alt='pinterest-icon'
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-[14vw] px-[12vw] pt-[14vw] border border-grey-200 flex-1 min-[479px]:pt-[10vw] min-[479px]:gap-[10vw] min-[991px]:p-[4vw] min-[991px]:pb-0'>
        <div className=' text-center'>
          <h3 className='text-h4 mb-7 min-[991px]:text-right'>Navigation</h3>

          <ul className='flex gap-x-5 gap-y-3 justify-center flex-wrap mb-5 min-[991px]:justify-end'>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Lorem
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Ipsum
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Dolor
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Sit
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='text-h6 font-normal text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Amet
              </Link>
            </li>
          </ul>

          <ul className='flex gap-4 justify-center min-[991px]:justify-end'>
            <li>
              <Link
                href='/contact'
                className='text-xs text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-xs text-white/60 hover:text-white transition-colors duration-300 ease-in-out'>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className='mt-auto -mx-[12vw] p-[6vw] border-t border-grey-200 text-center min-[479px]:p-[4vw] min-[767px]:py-[3vw] min-[991px]:-mx-[4vw] min-[991px]:text-right'>
          <p className='text-[11px] leading-4 text-white/60'>
            Created with ❤️ by{' '}
            <Link
              href=''
              className='text-white hover:text-primary transition-all ease-in-out duration-500'>
              Lazy Doug
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
