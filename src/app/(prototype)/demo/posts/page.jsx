import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import FeaturedItem from '@/components/FeaturedItem'
import FullImageCard from '@/components/FullImageCard'
import HeroSection from '@/components/HeroSection'
import InstagramPost from '@/components/InstagramPost'
import CategoryButton from '@/components/CategoryButton'
import Pagination from '@/components/Pagination'
import UnderlineLinkText from '@/components/UnderlineLinkText'

import { imgUrl } from '@/helpers/generateImageUrl'
import {
  getAllPosts,
  getCategories,
  getFeaturedPosts,
  getTags,
} from '@/helpers/sanityClient'

const PostsPage = async ({ searchParams }) => {
  const allPosts = await getAllPosts()
  const featuredPosts = await getFeaturedPosts()
  const categories = await getCategories()
  const tags = await getTags()

  const numberOfPostsPerPage = 5
  const numberOfPages = Math.ceil(allPosts.length / numberOfPostsPerPage)
  const currentPage = parseInt(searchParams.page) || 1

  const slicedPosts = allPosts.slice(
    (currentPage - 1) * numberOfPostsPerPage,
    currentPage * numberOfPostsPerPage
  )

  if (currentPage > numberOfPages) return notFound()

  return (
    <>
      <HeroSection
        backgroundImage='/demo/tomasz-zagorski-1130739-unsplash.jpg'
        header='OLOFOFO'
        title='All Posts'
      />

      <section className='relative z-20 mx-auto flex max-w-[1200px] flex-wrap px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-8 min-[991px]:pb-[120px]'>
        <div className='w-full flex-initial min-[991px]:flex-1'>
          <div className='flex flex-col gap-6'>
            {slicedPosts.map((post) => (
              <FullImageCard
                key={post._id}
                slug={post.slug.current}
                title={post.title}
                thumbnail={imgUrl(post.mainImage).url()}
                category={post.category.title}
                date={post.publishedAt}
                bodyLength={post.bodyTextLength}
                isFeatured={post.isFeatured}
                bigPreview
              />
            ))}
          </div>

          {/* page counter and navigation */}
          <Pagination currentPage={currentPage} totalPages={numberOfPages} />
        </div>

        <aside className='pt-16 min-[479px]:mx-auto min-[479px]:w-2/3 min-[991px]:ml-[5%] min-[991px]:w-[312px] min-[991px]:pt-0'>
          <div className='mb-12 flex flex-wrap gap-3'>
            {categories.map(({ _id, title, coverImage }) => (
              <CategoryButton
                key={_id}
                name={title}
                imageSrc={imgUrl(coverImage).url()}
              />
            ))}
          </div>

          {/*Featured*/}
          <div className='mb-12'>
            <div className='mb-8 flex items-center gap-3'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5'>Featured</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='flex flex-col gap-5'>
              {featuredPosts.map((featuredPost) => (
                <FeaturedItem
                  key={featuredPost._id}
                  slug={featuredPost.slug.current}
                  title={featuredPost.title}
                  category={featuredPost.category.title}
                  date={featuredPost.publishedAt}
                  thumbnail={imgUrl(featuredPost.mainImage).url()}
                />
              ))}
            </div>
          </div>

          {/*Tags*/}
          <div className='mb-12'>
            <div className='mb-8 flex items-center gap-3'>
              <hr className='w-full border border-white/30' />
              <h5 className='text-h5'>Tags</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='flex flex-wrap gap-5'>
              {tags.map(({ _id, title }) => (
                <UnderlineLinkText
                  key={_id}
                  href={`/tags/${title.toLowerCase()}`}
                >{`#${title}`}</UnderlineLinkText>
              ))}
            </div>
          </div>

          {/*Stay In Touch*/}
          <div className='mb-12'>
            <div className='mb-8 flex items-center gap-3'>
              <hr className='w-full border border-white/30' />
              <h5 className='shrink-0 text-h5'>Stay in Touch</h5>
              <hr className='w-full border border-white/30' />
            </div>

            {/*Social Media*/}
            <div className='mx-auto flex w-fit gap-2'>
              <Link
                href='https://x.com/'
                className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#2aa3f0]'
              >
                <Image
                  src='/demo/twitter-white.svg'
                  alt='x-twitter-icon'
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href='https://facebook.com/'
                className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#3b5998]'
              >
                <Image
                  src='/demo/facebook-white.svg'
                  alt='facebook-icon'
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href='https://instagram.com/'
                className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[linear-gradient(72.44deg,_#FF7A00_11.92%,_#FF0169_51.56%,_#D300C5_85.69%)]'
              >
                <Image
                  src='/demo/instagram-white.svg'
                  alt='instagram-icon'
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href='https://pinterest.com/'
                className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#f83f5a]'
              >
                <Image
                  src='/demo/pinterest-white.svg'
                  alt='pinterest-icon'
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href='mailto:mail@samplemail.com'
                className='rounded-full bg-white/[0.08] p-[10px] transition-colors duration-300 ease-in-out hover:bg-[#e31e24]'
              >
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
            <div className='mb-8 flex items-center gap-3'>
              <hr className='w-full border border-white/30' />
              <h5 className='shrink-0 text-h5'>Instagram</h5>
              <hr className='w-full border border-white/30' />
            </div>

            <div className='grid grid-cols-3 grid-rows-2 gap-2'>
              {slicedPosts.map(({ _id, mainImage }) => (
                <InstagramPost key={_id} imageUrl={imgUrl(mainImage).url()} />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}

export default PostsPage
