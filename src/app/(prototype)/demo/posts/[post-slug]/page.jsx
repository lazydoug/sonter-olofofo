import HeroSection from '@/components/HeroSection'
import RelatedPosts from '@/components/RelatedPosts'
import Image from 'next/image'
import Link from 'next/link'

const SinglePostPage = () => {
  return (
    <>
      <div className='relative'>
        <HeroSection />

        <div className='absolute bottom-0 right-0 flex'>
          <Link
            href={'https://x.com'}
            className='bg-grey-100 p-3 hover:bg-[#2aa3f0]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image src={'/demo/twitter-white.svg'} alt='twitter-icon' fill />
            </div>
          </Link>

          <Link
            href={'https://facebook.com'}
            className='bg-grey-100 p-3 hover:bg-[#3b5998]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image
                src={'/demo/facebook-white.svg'}
                alt='facebook-icon'
                fill
              />
            </div>
          </Link>
          <Link
            href={'https://pinterest.com'}
            className='bg-grey-100 p-3 hover:bg-[#f83f5a]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image
                src={'/demo/pinterest-white.svg'}
                alt='pinterest-icon'
                fill
              />
            </div>
          </Link>
          <Link
            href='https://instagram.com'
            className='bg-grey-100 p-3 hover:bg-[linear-gradient(72.44deg,_#FF7A00_11.92%,_#FF0169_51.56%,_#D300C5_85.69%)]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image
                src={'/demo/instagram-white.svg'}
                alt='instagram-icon'
                fill
              />
            </div>
          </Link>
        </div>
      </div>

      <section className='mb-20 bg-white pb-14 pt-20'></section>

      {/* more posts */}
      <section className='relative z-10 px-4'>
        <div className='mb-20 text-center'>
          <p className='mb-4 text-[11px] font-semibold uppercase leading-4 tracking-2'>
            More Posts
          </p>
          <h4 className='mb-5 text-h3 capitalize'>You might also like</h4>
          <hr className='mx-auto w-[88px] border border-white min-[767px]:w-[120px]' />
        </div>

        <RelatedPosts />
      </section>
    </>
  )
}

export default SinglePostPage
