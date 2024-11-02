import Link from 'next/link'
import Image from 'next/image'

import imageUrlBuilder from '@sanity/image-url'

import HeroSection from '@/components/HeroSection'
import HalfImageCard from '@/components/HalfImageCard'
import FullImageCard from '@/components/FullImageCard'
import NewsletterForm from '@/components/NewsletterForm'

import { getPostSlice } from '@/helpers/sanityClient'
import { imgUrl } from '@/helpers/generateImageUrl'

const Home = async () => {
  const posts = await getPostSlice(8)

  return (
    <>
      <HeroSection
        backgroundImage='/demo/tomasz-zagorski-1396867-unsplash.jpg'
        header='INTRODUCING OLOFOFO'
        title='News, Trends & Gossips'
        subtitle='Some dummy text, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ducimus doloremque officia. Explicabo obcaecati id,
              neque assumenda debitis distinctio ullam ex numquam nulla ipsum
              velit. Velit explicabo hic maiores commodi!'
      />

      <section className='relative z-10 mx-auto max-w-[1200px] px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-10 min-[991px]:pb-[120px]'>
        <div className='grid grid-cols-6 items-stretch justify-stretch gap-4 py-2'>
          <HalfImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            slug={posts[0].slug.current}
            title={posts[0].title}
            thumbnail={imgUrl(posts[0].mainImage).url()}
            category={posts[0].category.title}
            date={posts[0].publishedAt}
            bodyLength={posts[0].bodyTextLength}
            isFeatured={posts[0].isFeatured}
          />

          <FullImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            slug={posts[1].slug.current}
            title={posts[1].title}
            thumbnail={imgUrl(posts[1].mainImage).url()}
            category={posts[1].category.title}
            date={posts[1].publishedAt}
            bodyLength={posts[1].bodyTextLength}
            isFeatured={posts[1].isFeatured}
          />

          <HalfImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[479px]:col-start-4 min-[991px]:col-span-2'
            slug={posts[2].slug.current}
            title={posts[2].title}
            thumbnail={imgUrl(posts[2].mainImage).url()}
            category={posts[2].category.title}
            date={posts[2].publishedAt}
            bodyLength={posts[2].bodyTextLength}
            isFeatured={posts[2].isFeatured}
          />

          <FullImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[479px]:row-start-2'
            slug={posts[3].slug.current}
            title={posts[3].title}
            thumbnail={imgUrl(posts[3].mainImage).url()}
            category={posts[3].category.title}
            date={posts[3].publishedAt}
            bodyLength={posts[3].bodyTextLength}
            isFeatured={posts[3].isFeatured}
          />

          <FullImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[479px]:col-start-4 min-[479px]:row-start-5 min-[991px]:row-start-2'
            slug={posts[4].slug.current}
            title={posts[4].title}
            thumbnail={imgUrl(posts[4].mainImage).url()}
            category={posts[4].category.title}
            date={posts[4].publishedAt}
            bodyLength={posts[4].bodyTextLength}
            isFeatured={posts[4].isFeatured}
          />

          <div className='col-span-6 bg-white px-[12%] py-12 min-[479px]:col-span-6 min-[479px]:row-start-3 min-[479px]:px-[15%] min-[479px]:py-14 min-[767px]:px-[8%] min-[991px]:col-span-4'>
            <h4 className='mb-5 text-h4 text-black'>
              👉 News Posts Straight to Your Inbox
            </h4>

            <NewsletterForm responsive />
          </div>

          {/* social cards */}
          <>
            <Link
              href=''
              className='col-span-3 flex flex-col items-center justify-center bg-[#2aa3f0] p-8 min-[991px]:col-span-1'
            >
              <Image
                className='mb-4'
                src='/demo/twitter-white.svg'
                alt='x-twitter-icon'
                width={40}
                height={40}
              />
              <span className='mb-[2px] text-xs'>Follow us on</span>
              <span className='text-h6 tracking-[4px]'>TWITTER</span>
            </Link>

            <Link
              href=''
              className='col-span-3 flex flex-col items-center justify-center bg-[#3b5998] p-8 min-[991px]:col-span-1'
            >
              <Image
                className='mb-4'
                src='/demo/facebook-white.svg'
                alt='facebook-icon'
                width={40}
                height={40}
              />
              <span className='mb-[2px] text-xs'>Like us on</span>
              <span className='text-h6 tracking-[4px]'>FACEBOOK</span>
            </Link>
          </>

          <HalfImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            slug={posts[5].slug.current}
            title={posts[5].title}
            thumbnail={imgUrl(posts[5].mainImage).url()}
            category={posts[5].category.title}
            date={posts[5].publishedAt}
            bodyLength={posts[5].bodyTextLength}
            isFeatured={posts[5].isFeatured}
          />

          <HalfImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            slug={posts[6].slug.current}
            title={posts[6].title}
            thumbnail={imgUrl(posts[6].mainImage).url()}
            category={posts[6].category.title}
            date={posts[6].publishedAt}
            bodyLength={posts[6].bodyTextLength}
            isFeatured={posts[6].isFeatured}
          />

          <HalfImageCard
            className='col-span-6 min-[479px]:col-span-3 min-[991px]:col-span-2'
            slug={posts[7].slug.current}
            title={posts[7].title}
            thumbnail={imgUrl(posts[7].mainImage).url()}
            category={posts[7].category.title}
            date={posts[7].publishedAt}
            bodyLength={posts[7].bodyTextLength}
            isFeatured={posts[7].isFeatured}
          />
        </div>

        <Link
          href='/demo/posts'
          className='mt-5 flex h-16 items-center justify-center rounded-xs border border-white/30 text-[14px] font-medium leading-4 tracking-2 transition-all duration-[400ms] hover:border-transparent hover:bg-primary min-[767px]:h-[72px] min-[991px]:h-20 min-[991px]:text-btn-lg'
        >
          SEE MORE POSTS
        </Link>
      </section>
    </>
  )
}

export default Home
