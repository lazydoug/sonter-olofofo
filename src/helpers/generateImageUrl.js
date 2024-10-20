import ImageUrlBuilder from '@sanity/image-url'

import { client } from './sanityClient'

const imgUrlBuilder = ImageUrlBuilder(client) // Get a pre-configured url-builder from my sanity client

const imgUrl = (imgSrc) => {
  return imgUrlBuilder.image(imgSrc)
}

export default imgUrl
