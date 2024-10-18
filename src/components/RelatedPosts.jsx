import Link from 'next/link'

import FullImageCard from './FullImageCard'

import { DummyPosts } from '@/demo-data/data'

const RelatedPosts = () => {
  return (
    <div className='grid gap-3 min-[479px]:grid-cols-2 min-[991px]:grid-cols-3'>
      {DummyPosts.slice(0, 5).map(
        ({ id, title, category, thumbnail, date, readTime, isFeatured }) => (
          <Link key={id} href={`/demo/posts/${title.split(' ').join('-')}`}>
            <FullImageCard
              title={title}
              category={category}
              thumbnail={`/demo/${thumbnail}`}
              date={date}
              readTime={readTime}
              isFeatured={isFeatured}
            />
          </Link>
        )
      )}
    </div>
  )
}

export default RelatedPosts
