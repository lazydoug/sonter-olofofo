import clsx from 'clsx'
import Link from 'next/link'

const ArtistAvatar = ({ large, href }) => {
  return (
    <Link href={href ?? ''}>
      <div className='flex items-center gap-2'>
        <div
          className={clsx(
            'rounded-full bg-[url("/assets/rayul-214671-unsplash.jpg")] bg-cover bg-center bg-no-repeat',
            { 'h-4 w-4': !large, 'h-10 w-10': large }
          )}
        ></div>
        <p className={clsx({ 'text-sm font-semibold': !large })}>Khaid</p>
      </div>
    </Link>
  )
}

export default ArtistAvatar
