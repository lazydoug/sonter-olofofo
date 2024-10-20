import Link from 'next/link'

import FullImageCard from './FullImageCard'

import { DummyPosts } from '@/demo-data/data'

const RelatedPosts = () => {
  return (
    <>
      <div className='grid gap-3 pb-2 min-[479px]:grid-cols-2 min-[991px]:grid-cols-3'>
        {DummyPosts.slice(0, 6).map(
          ({
            _id,
            slug,
            title,
            category,
            thumbnail,
            date,
            readTime,
            isFeatured,
          }) => (
            <FullImageCard
              key={_id}
              slug={slug}
              title={title}
              category={category}
              thumbnail={`/demo/${thumbnail}`}
              date={date}
              readTime={readTime}
              isFeatured={isFeatured}
            />
          )
        )}
      </div>

      <Link
        href='/demo/posts'
        className='mt-5 flex h-16 items-center justify-center rounded-xs border border-white/30 text-[14px] font-medium leading-4 tracking-2 transition-all duration-[400ms] hover:border-transparent hover:bg-primary min-[767px]:h-[72px] min-[991px]:h-20 min-[991px]:text-btn-lg'
      >
        SEE MORE POSTS
      </Link>
    </>
  )
}

export default RelatedPosts
