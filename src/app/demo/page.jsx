import Link from 'next/link'

import HeroSection from '@/components/HeroSection'
import HalfImageCard from '@/components/HalfImageCard'
import FullImageCard from '@/components/FullImageCard'
import NewsletterForm from '@/components/common/NewsletterForm'

import { posts } from '@/demo-data/data'
import Image from 'next/image'

const Home = () => {
  const postsList = posts.slice(-8)

  return (
    <main className='min-h-screen bg-black'>
      <HeroSection />

      <section className='relative z-10 px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-10 min-[991px]:pb-[120px]'>
        <div className='py-2 grid gap-4 justify-stretch items-stretch grid-cols-6'>
          <HalfImageCard
            style='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[0].title}
            thumbnail={`/demo/${postsList[0].thumbnail}`}
            category={postsList[0].category}
            date={postsList[0].date}
            readTime={postsList[0].readTime}
            isFeatured={postsList[0].isFeatured}
          />

          <FullImageCard
            style='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[1].title}
            thumbnail={`/demo/${postsList[1].thumbnail}`}
            category={postsList[1].category}
            date={postsList[1].date}
            readTime={postsList[1].readTime}
            isFeatured={postsList[1].isFeatured}
          />

          <HalfImageCard
            style='col-span-6 min-[479px]:col-start-4 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[2].title}
            thumbnail={`/demo/${postsList[2].thumbnail}`}
            category={postsList[2].category}
            date={postsList[2].date}
            readTime={postsList[2].readTime}
            isFeatured={postsList[2].isFeatured}
          />

          <FullImageCard
            style='col-span-6 min-[479px]:row-start-2 min-[479px]:col-span-3'
            title={postsList[3].title}
            thumbnail={`/demo/${postsList[3].thumbnail}`}
            category={postsList[3].category}
            date={postsList[3].date}
            readTime={postsList[3].readTime}
            isFeatured={postsList[3].isFeatured}
          />

          <FullImageCard
            style='col-span-6 min-[479px]:row-start-5 min-[479px]:col-span-3 min-[479px]:col-start-4 min-[991px]:row-start-2'
            title={postsList[4].title}
            thumbnail={`/demo/${postsList[4].thumbnail}`}
            category={postsList[4].category}
            date={postsList[4].date}
            readTime={postsList[4].readTime}
            isFeatured={postsList[4].isFeatured}
          />

          <div className='bg-white px-[12%] py-12 col-span-6 min-[479px]:px-[15%] min-[479px]:py-14  min-[767px]:px-[8%] min-[479px]:col-span-6 min-[479px]:row-start-3 min-[991px]:col-span-4'>
            <h4 className='text-h4 text-black mb-5'>
              👉 News Posts Straight to Your Inbox
            </h4>

            <NewsletterForm responsive />
          </div>

          {/* social cards */}
          <>
            <Link
              href=''
              className='p-8 bg-[#2aa3f0] flex flex-col justify-center items-center col-span-3 min-[991px]:col-span-1'>
              <Image
                className='mb-4'
                src='/demo/twitter-white.svg'
                alt='x-twitter-icon'
                width={40}
                height={40}
              />
              <span className='text-xs mb-[2px]'>Follow us on</span>
              <span className='text-h6 tracking-[4px]'>TWITTER</span>
            </Link>

            <Link
              href=''
              className='p-8 bg-[#3b5998] flex flex-col justify-center items-center col-span-3 min-[991px]:col-span-1'>
              <Image
                className='mb-4'
                src='/demo/facebook-white.svg'
                alt='facebook-icon'
                width={40}
                height={40}
              />
              <span className='text-xs mb-[2px]'>Like us on</span>
              <span className='text-h6 tracking-[4px]'>FACEBOOK</span>
            </Link>
          </>

          <HalfImageCard
            style='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[5].title}
            thumbnail={`/demo/${postsList[5].thumbnail}`}
            category={postsList[5].category}
            date={postsList[5].date}
            readTime={postsList[5].readTime}
            isFeatured={postsList[5].isFeatured}
          />

          <HalfImageCard
            style='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[6].title}
            thumbnail={`/demo/${postsList[6].thumbnail}`}
            category={postsList[6].category}
            date={postsList[6].date}
            readTime={postsList[6].readTime}
            isFeatured={postsList[6].isFeatured}
          />

          <HalfImageCard
            style='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            title={postsList[7].title}
            thumbnail={`/demo/${postsList[7].thumbnail}`}
            category={postsList[7].category}
            date={postsList[7].date}
            readTime={postsList[7].readTime}
            isFeatured={postsList[7].isFeatured}
          />
        </div>

        <Link
          href=''
          className='flex justify-center items-center h-16 mt-5 border border-white/30 rounded-xs tracking-2 text-[14px] font-medium leading-4 transition-all duration-[400ms] hover:bg-primary hover:border-transparent min-[767px]:h-[72px] min-[991px]:h-20 min-[991px]:text-btn-lg'>
          SEE MORE POSTS
        </Link>
      </section>
    </main>
  )
}

export default Home
