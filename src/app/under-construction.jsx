import Image from 'next/image'

const UnderConstruction = () => {
  return (
    <section className='px-6 w-full min-h-screen bg-[#242323]'>
      <div className='relative w-full h-2/4'>
        <Image
          src='/landing-page/construction.gif'
          alt='Under construction text animation'
          fill
          unoptimized
        />
      </div>
      <hr />
      <p className='text-h-5 text-[#dbdbdb] font-bold'>Sonter&apos;s Blog</p>
      <p className='text-[#dbdbdb] text-[32.85px]'>
        We&apos;re giving the site a little makeover.
      </p>
      <p className='text-[#dbdbdb] text-[25.6px]'>
        Come back later for our big reveal. <br /> We promise, it&apos;ll be
        worth it.
      </p>
      <p className='text-h-5 text-[16.8px]'>
        In the meantime, reach us at: <br />
        <span className='text-[20px]'>mail@sontersblog.com</span>
      </p>
    </section>
  )
}

export default UnderConstruction
