import FullImageCard from '@/components/FullImageCard'
import HeroSection from '@/components/HeroSection'

import { DummyPosts } from '@/demo-data/data'
import Image from 'next/image'
import Link from 'next/link'

const PostsPage = () => {
  const postsList = DummyPosts.slice(0, 5)

  return (
    <div className='min-h-screen bg-black'>
      <HeroSection
        backgroundImage='/demo/tomasz-zagorski-1130739-unsplash.jpg'
        header='OLOFOFO'
        title='All Posts'
      />

      <section className='relative z-10 max-w-[1200px] mx-auto px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-10 min-[991px]:pb-[120px]'>
        <div>
          <div className='flex flex-col gap-6 mt-2'>
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
                />
              )
            )}
          </div>

          <div className='relative mt-7 py-3 flex items-center'>
            <span className='mx-auto'>1 / 6</span>

            <Link
              href={''}
              className='absolute right-0 flex gap-2 items-center px-6 py-3 text-btn-md tracking-2 border border-white/40 rounded-xs uppercase'>
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

        <aside className='pt-16'>
          <div className='flex flex-wrap gap-3 mx-auto min-[479px]:w-4/6'>
            {postsList.map(({ id, category }) => (
              <Link
                key={id}
                href={''}
                className='px-5 py-3 text-btn-md tracking-2 border border-white/40 rounded-xs uppercase flex-1 text-center'>
                {category}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default PostsPage
