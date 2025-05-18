import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import HeroSection from '@/components/HeroSection'
import RelatedPosts from '@/components/RelatedPosts'
import PostBody from '@/components/PostBody'

import { getSinglePost } from '@/helpers/sanityClient'
import { imgUrl } from '@/helpers/generateImageUrl'
import { shortDateFormatter } from '@/helpers/dateFormatter'

const SinglePostPage = async ({ params: { slug } }) => {
  const post = await getSinglePost(slug, 6)

  // Format date
  const formattedDate = shortDateFormatter.format(new Date(post.publishedAt))

  // Return Not Found page if post is not found
  if (!post) return notFound()

  return (
    <>
      <HeroSection
        singlePost
        header={`${formattedDate} in `}
        category={post.category.title}
        title={post.title}
        backgroundImage={imgUrl(post.mainImage).url()}
      />

      <section className='max-[991px]:relative'>
        <div className='absolute bottom-0 right-5 z-20 flex min-[991px]:fixed min-[991px]:bottom-auto min-[991px]:right-0 min-[991px]:top-1/2 min-[991px]:-translate-y-1/2 min-[991px]:flex-col'>
          <Link
            href={'https://x.com'}
            className='bg-grey-100 p-3 hover:bg-[#2aa3f0]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image src={'/assets/twitter-white.svg'} alt='twitter-icon' fill />
            </div>
          </Link>

          <Link
            href={'https://facebook.com'}
            className='bg-grey-100 p-3 hover:bg-[#3b5998]'
          >
            <div className='relative h-[14px] w-[14px] min-[991px]:h-[18px] min-[991px]:w-[18px]'>
              <Image
                src={'/assets/facebook-white.svg'}
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
                src={'/assets/pinterest-white.svg'}
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
                src={'/assets/instagram-white.svg'}
                alt='instagram-icon'
                fill
              />
            </div>
          </Link>
        </div>
      </section>

      <section className='relative z-10 px-5 pb-20 min-[767px]:pb-24 min-[991px]:px-11 min-[991px]:pb-[120px]'>
        <div className='mx-auto max-w-[1200px] bg-white pb-14 pt-20 text-black min-[479px]:pb-16 min-[767px]:py-[104px]'>
          <PostBody article={post.body} tags={post.tags} />
        </div>
      </section>

      {/* more posts */}
      <section className='relative z-10 px-4 min-[991px]:px-5'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='mb-20 text-center'>
            <p className='mb-4 text-[11px] font-semibold uppercase leading-4 tracking-2'>
              More Posts
            </p>
            <h4 className='mb-5 text-h3 capitalize min-[767px]:text-h2'>
              You might also like
            </h4>
            <hr className='mx-auto w-[88px] border border-white min-[767px]:w-[120px]' />
          </div>
          <RelatedPosts posts={post.relatedPosts} />
        </div>
      </section>
    </>
  )
}

export default SinglePostPage
