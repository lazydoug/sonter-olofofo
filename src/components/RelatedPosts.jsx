import Link from 'next/link'

import FullImageCard from './FullImageCard'

import { imgUrl } from '@/helpers/generateImageUrl'

const RelatedPosts = ({ posts }) => {
  return (
    <>
      <div className='grid gap-3 pb-2 min-[479px]:grid-cols-2 min-[991px]:grid-cols-3 min-[991px]:gap-4'>
        {posts.map((post) => (
          <FullImageCard
            key={post._id}
            slug={post.slug.current}
            title={post.title}
            thumbnail={imgUrl(post.mainImage).url()}
            category={post.category.title}
            date={post.publishedAt}
            bodyLength={post.bodyTextLength}
            isFeatured={post.isFeatured}
            cardVersion1
          />
        ))}
      </div>

      <Link
        href='/demo/posts'
        className='mt-5 flex h-16 items-center justify-center rounded-xs border border-white/30 text-[14px] font-medium leading-4 tracking-2 transition-all duration-[400ms] hover:border-transparent hover:bg-primary min-[767px]:h-[72px] min-[991px]:h-20 min-[991px]:text-btn-lg'
      >
        SEE ALL POSTS
      </Link>
    </>
  )
}

export default RelatedPosts
