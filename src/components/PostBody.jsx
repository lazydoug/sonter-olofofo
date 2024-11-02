import Image from 'next/image'
import Link from 'next/link'

import { PortableText } from '@portabletext/react'

import { imgUrl } from '@/helpers/generateImageUrl'

import UnderlineHoverText from './UnderlineLinkText'

const RichTextComponents = {
  types: {
    image: ({ value }) => (
      <div className='relative'>
        <img src={imgUrl(value).url()} alt={value} className='my-8' />
      </div>
    ),
  },

  block: {
    normal: ({ children }) => (
      <p className='mb-6 !text-[15px] text-md min-[767px]:text-lg'>
        {children}
      </p>
    ),
    h2: ({ children }) => <h2 className='mb-5 text-h2'>{children}</h2>,
    h3: ({ children }) => (
      <h3 className='mb-4 text-h4 min-[991px]:text-h3'>{children}</h3>
    ),
    h4: ({ children }) => <h4 className='mb-4 text-h4'>{children}</h4>,
    h5: ({ children }) => <h5 className='mb-2 text-h5'>{children}</h5>,
    h6: ({ children }) => <h6 className='mb-4 text-h6'>{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className='my-10 border-l-[3px] border-primary px-8 py-4 text-xl min-[767px]:px-10 min-[767px]:text-2xl'>
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className='mb-6 mt-4 list-disc space-y-2 pl-10 text-h6'>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className='mb-6 mt-4 list-decimal space-y-2 pl-10 text-h6'>
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <Link
        className='text-primary decoration-[1.5px] selection:text-secondary/80 hover:underline'
        href={value.href}
      >
        {children}
      </Link>
    ),
    dropcap: ({ children }) => (
      <span className='float-left mr-3 text-[64px] leading-10'>{children}</span>
    ),
  },
}

const PostBody = ({ article, tags }) => {
  return (
    <article className='relative px-4 selection:bg-[#FFD1D1] selection:text-grey-300 min-[479px]:px-[10%] min-[991px]:px-[16%]'>
      <PortableText value={article} components={RichTextComponents} />

      {/* Tags */}
      <div className='flex gap-4 pt-8'>
        {tags.map(({ _id, title }) => (
          <UnderlineHoverText key={_id} href={`/demo/tags/${title.toLowerCase()}`}>
            {<span className='text-grey-300'>#</span>}
            {title}
          </UnderlineHoverText>
        ))}
      </div>
    </article>
  )
}

export default PostBody
