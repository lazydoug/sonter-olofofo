import SocialLinks from '@/components/SocialLinks'
import Image from 'next/image'
import Link from 'next/link'

const UnderConstruction = () => {
  const socials = [
    {
      name: 'x-twitter',
      url: 'https://x.com/',
      icon: 'twitter-white.svg',
      style: 'hover:bg-[#2aa3f0]',
    },
    {
      name: 'facebook',
      url: 'https://facebook.com/',
      icon: 'facebook-white.svg',
      style: 'hover:bg-[#3b5998]',
    },
    {
      name: 'instagram',
      url: 'https://instagram.com/',
      icon: 'instagram-white.svg',
      style:
        'hover:bg-[linear-gradient(72.44deg,_#FF7A00_11.92%,_#FF0169_51.56%,_#D300C5_85.69%)]',
    },
    {
      name: 'pinterest',
      url: 'https://pinterest.com/',
      icon: 'pinterest-white.svg',
      style: 'hover:bg-[#f83f5a]',
    },
    // {
    //   name: 'mail',
    //   url: 'mailto:mail@samplemail.com',
    //   icon: 'send-white.svg',
    //   style: 'hover:bg-[#e31e24]',
    // },
  ]

  return (
    <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 w-full max-w-[1400px]'>
      <div className='relative w-full h-[20vw]'>
        <Image
          src='/landing-page/construction.gif'
          alt='Under construction text animation'
          fill
          unoptimized
        />
      </div>

      <hr className='my-8 -mx-6 border-2' />

      <div className='mb-5 flex gap-4 flex-col md:flex-row lg:gap-20'>
        <div>
          <p className='text-h-5 text-[#dbdbdb] font-bold mb-3'>
            Sonter&apos;s Blog a.k.a. Sonter Olofofo
          </p>

          <p className='text-[#dbdbdb] text-[32px]'>
            We&apos;re giving the site a little makeover.
          </p>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-20'>
          <div>
            <p className='text-[#dbdbdb] text-[20px] mb-3'>
              Come back later for our big <Link href={'/demo'} className='hover:opacity-10 hover:underline'>reveal</Link>. We promise, it&apos;ll be
              worth it.
            </p>

            <p className='text-[14px]'>
              In the meantime, reach us at: <br />
              <Link
                href='mailto:mail@sontersblog.com'
                className='hover:underline'>
                mail@sontersblog.com
              </Link>
            </p>
          </div>

          <div className='w-fit flex gap-2'>
            {socials.map(({ name, url, icon, style }) => (
              <SocialLinks
                key={name}
                name={name}
                url={url}
                icon={icon}
                style={style}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnderConstruction
