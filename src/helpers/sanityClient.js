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
    `*[_type == "post"] | order(publishedAt desc) [0...${sliceEnd}]
    {slug, title, mainImage, category->{title}, isFeatured, publishedAt}`
  )

  return posts
}

export const getAllPosts = async () => {
  const allPosts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)
    {_id, slug, title, mainImage, category->{title}, isFeatured, publishedAt}`
  )

  return allPosts
}

export const getFeaturedPosts = async (sliceEnd) => {
  sliceEnd = sliceEnd || 3

  const featuredPosts = await client.fetch(
    `*[_type == "post" && isFeatured] | order(publishedAt desc) [0...${sliceEnd}]
    {_id, slug, title, mainImage, category->{title}, isFeatured, publishedAt}`
  )

  return featuredPosts
}

export const getTags = async () => {
  const tags = await client.fetch(
    `*[_type == "tag"] {_id, title}`
  )

  return tags
}

export const getCategories = async () => {
  const categories = await client.fetch(
    `*[_type == "category"] {_id, title, coverImage}`
  )

  return categories
}
