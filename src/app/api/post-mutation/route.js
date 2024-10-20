import { revalidateTag } from 'next/cache'

export async function POST(req) {
  try {
    const body = await req.text()
    const { _id } = JSON.parse(body)

    if (!_id) {
      return new Response('Invalid request!', {
        status: 400,
      })
    }

    revalidateTag('postCollection')

    return new Response('Success!', {
      status: 200,
    })
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
}
