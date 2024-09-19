'use client'
const NewsletterForm = ({ transparent, responsive }) => {
  const style = transparent
    ? 'border-white/25 text-[#999] hover:border-white/50 focus:bg-white focus:border-white '
    : 'border-grey-400 text-[#333] hover:border-grey-300 focus:border-primary'

  return (
    <form action=''>
      <div
        className={`flex flex-col ${
          responsive && 'min-[767px]:flex-row min-[767px]:items-end'
        } gap-5`}>
        <div className='w-full'>
          {!transparent && (
            <label
              htmlFor='subscriber-name'
              className='block w-fit text-[9px] text-black font-semibold leading-4 tracking-2 mb-1'>
              NAME
            </label>
          )}

          <input
            required
            id='subscriber-name'
            name='subscriber-name'
            type='text'
            placeholder='Full Name'
            className={`${style} block w-full bg-transparent px-5 py-4 border rounded-xs text-h6 font-normal transition-all duration-300 ease-in-out outline-none placeholder:text-[#999]`}
          />
        </div>

        <div className='w-full'>
          {!transparent && (
            <label
              htmlFor='subscriber-email'
              className='block w-fit text-[9px] text-black font-semibold leading-4 tracking-2 mb-1'>
              EMAIL
            </label>
          )}

          <input
            required
            id='subscriber-email'
            name='subscriber-email'
            type='email'
            placeholder='Email Address'
            className={`${style} block w-full bg-transparent px-5 py-4 border rounded-xs text-h6 font-normal transition-all duration-300 ease-in-out outline-none placeholder:text-[#999]`}
          />
        </div>

        <button
          className='px-6 py-4 bg-primary hover:bg-primary-hover text-btn-md leading-5 uppercase border border-transparent rounded-xs hover:rounded-none transition-all duration-[400ms]'
          type='submit'
          onClick={() => {}}>
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
