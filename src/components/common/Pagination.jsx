import Image from 'next/image'
import Link from 'next/link'

const Pagination = ({ currentPage, totalPages }) => {
  currentPage = currentPage || 1

  return (
    <div className='relative mt-7 flex items-center py-3'>
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className='absolute left-0 flex items-center gap-2 transition-colors duration-300 hover:text-primary'
        >
          <Image
            src='/demo/left-white.svg'
            alt='left_arrow'
            width={18}
            height={18}
          />
          <span className='text-btn-md uppercase tracking-2'>Prev</span>
        </Link>
      )}

      <div className='mx-auto text-xs min-[767px]:text-btn-md'>
        {currentPage} / {totalPages}
      </div>

      {currentPage < totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className='absolute right-0 flex items-center gap-2 transition-colors duration-300 hover:text-primary'
        >
          <span className='text-btn-md uppercase tracking-2'>Next</span>
          <Image
            src='/demo/right-white.svg'
            alt='right_arrow'
            width={18}
            height={18}
          />
        </Link>
      )}
    </div>
  )
}

export default Pagination
