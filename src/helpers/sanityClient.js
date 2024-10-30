import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'hhfh8quh',
  dataset: 'production',
  apiVersion: '2024-10-15',
  useCdn: true,
})

export const getPostSlice = async (sliceEnd) => {
  sliceEnd = sliceEnd || 8

  const posts = client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$sliceEnd]
    {slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}`,
    { sliceEnd },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getAllPosts = async () => {
  const allPosts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)
    {_id, slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}`,
    {},
    { next: { tags: ['postCollection'] } }
  )

  return allPosts
}

export const getPostsByCategory = async (categoryName) => {
  const posts = await client.fetch(
    `{ 
      'category' : *[_type == 'category' && title match $categoryName][0] {title, coverImage}, 
      'posts' : *[_type == "post" && (category->title) match $categoryName] | order(publishedAt desc)
        {_id, slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}
    }`,
    { categoryName },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getPostsByTag = async (tagName) => {
  const posts = await client.fetch(
    `{ 
      'tag' : *[_type == 'tag' && title match $tagName][0] {title, coverImage}, 
      'posts' : *[_type == "post" && tags[]->title match $tagName] | order(publishedAt desc)
        {_id, slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}
    }`,
    { tagName },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getFeaturedPosts = async (sliceEnd) => {
  sliceEnd = sliceEnd || 3

  const featuredPosts = await client.fetch(
    `*[_type == "post" && isFeatured] | order(publishedAt desc) [0...$sliceEnd]
    {_id, slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt}`,
    { sliceEnd },
    { next: { tags: ['postCollection'] } }
  )

  return featuredPosts
}

export const getSinglePost = async (slug, sliceEnd) => {
  const singlePost = await client.fetch(
    `*[slug.current match $slug][0] 
      {_id, title, mainImage, body, publishedAt, category->{title}, tags[]->{_id, title}, 
        'relatedPosts': *[_type=='post' 
          && references(^.category._ref) 
          && references(^.tags[]._ref) 
          && !(title == ^.title )
        ] | order(publishedAt desc) [0...$sliceEnd] {
          _id, slug{current}, title, mainImage, category->{title}, isFeatured, 
          publishedAt, 'bodyTextLength': length(pt::text(body))
        }
      }`,
    { slug, sliceEnd }
  )

  return singlePost
}

export const getTags = async () => {
  const tags = await client.fetch(`*[_type == "tag"] {_id, title}`, {
    next: { revalidate: 10800 }, // Revalidate cache every 3 hours
  })

  return tags
}

export const getCategories = async () => {
  const categories = await client.fetch(
    `*[_type == "category"] {_id, title, coverImage}`,
    {
      next: { revalidate: 10800 }, // Revalidate cache every 3 hours
    }
  )

  return categories
}
