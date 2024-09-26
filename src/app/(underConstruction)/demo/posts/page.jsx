import Image from 'next/image'
import Link from 'next/link'

import FeaturedItem from '@/components/FeaturedItem'
import FullImageCard from '@/components/FullImageCard'
import HeroSection from '@/components/HeroSection'
import PostTag from '@/components/PostTag'

import { DummyPosts, DummyTags, DummyCategories } from '@/demo-data/data'
import InstagramPost from '@/components/InstagramPost'
import CategoryButton from '@/components/CategoryButton'

const PostsPage = () => {
  const postsList = DummyPosts.slice(0, 5)

  return (
    <div className='min-h-screen bg-black'>
      <HeroSection
        backgroundImage='/demo/tomasz-zagorski-1130739-unsplash.jpg'
        header='OLOFOFO'
        title='All Posts'
      />

      <section className='relative z-10 flex flex-wrap max-w-[1200px] mx-auto px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-8 min-[991px]:pb-[120px]'>
        <div className='flex-initial w-full min-[991px]:flex-1'>
          <div className='flex flex-col gap-6'>
            {postsList.map(
              ({
                id,
                category,
                title,
                date,
                readTime,
                thumbnail,
                isFeatured,
              }) => (
                <FullImageCard
                  key={id}
                  title={title}
                  thumbnail={thumbnail}
                  category={category}
                  date={date}
                  readTime={readTime}
                  isFeatured={isFeatured}
                  bigPreview
                />
              )
            )}
          </div>

          <div className='relative mt-7 py-3 flex items-center'>
            <span className='text-xs min-[767px]:text-btn-md mx-auto'>
              1 / 6
            </span>

            <Link
              href={''}
              className='absolute right-0 flex gap-2 items-center text-btn-md tracking-2 uppercase hover:text-primary transition-colors duration-300'>
              <span>Next</span>
              <Image
                src='/demo/right-white.svg'
                alt='right_arrow'
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>

        <aside className='pt-16 min-[479px]:w-2/3 min-[479px]:mx-auto min-[991px]:ml-[5%] min-[991px]:w-[312px] min-[991px]:pt-0'>
          <div className='flex flex-wrap gap-3 mb-12'>
            {DummyCategories.map(({ id, name, bannerImage }) => (
              <CategoryButton
                key={id}
                categoryName={name}
                categoryImg={bannerImage}
              />
            ))}
          </div>

          {/*Featured*/}
          <div className='mb-12'>
            <div className='flex gap-3 items-center mb-8'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5'>Featured</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='flex flex-col gap-5'>
              {postsList
                .slice(-3)
                .map(({ id, title, category, date, thumbnail }) => (
                  <FeaturedItem
                    key={id}
                    title={title}
                    category={category}
                    date={date}
                    thumbnail={thumbnail}
                  />
                ))}
            </div>
          </div>

          {/*Tags*/}
          <div className='mb-12'>
            <div className='flex gap-3 items-center mb-8'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5'>Tags</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='flex flex-wrap gap-5'>
              {DummyTags.map(tag => (
                <PostTag key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/*Stay In Touch*/}
          <div className='mb-12'>
            <div className='flex gap-3 items-center mb-8'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5 shrink-0'>Stay in Touch</h5>
              <hr className='w-full border border-white/30' />
            </div>

            {/*Social Media*/}
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
                className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-[linear-gradient(72.44deg,_#FF7A00_11.92%,_#FF0169_51.56%,_#D300C5_85.69%)]'>
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

              <Link
                href='mailto:mail@samplemail.com'
                className='p-[10px] rounded-full bg-white/[0.08] transition-colors duration-300 ease-in-out hover:bg-[#e31e24]'>
                <Image
                  src='/demo/send-white.svg'
                  alt='mail-icon'
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>

          {/*Featured Instagram Posts*/}
          <div className='mb-12'>
            <div className='flex gap-3 items-center mb-8'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5 shrink-0'>Instagram</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='grid gap-2 grid-cols-3 grid-rows-2'>
              {postsList.map(({ id, thumbnail }) => (
                <InstagramPost key={id} imageUrl={thumbnail} />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default PostsPage
