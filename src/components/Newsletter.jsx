import { FilledButton } from './common/Buttons'

const Newsletter = () => {
  return (
    <div className='bg-white px-[12%] py-12'>
      <h4 className='text-black mb-5'>👉 News Posts Straight to Your Inbox</h4>

      <form action=''>
        <div className='mb-5'>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='block text-[9px] text-black font-semibold tracking-2 mb-1'>
              NAME
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='border rounded-xs'
            />
          </div>

          <div>
            <label
              htmlFor='name'
              className='block text-[9px] text-black font-semibold tracking-2 mb-1'>
              EMAIL
            </label>
            <input type='text' placeholder='Email Address' />
          </div>
        </div>

        <FilledButton width='w-full' label='Subscribe' />
      </form>
    </div>
  )
}

export default Newsletter
