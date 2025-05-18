const CopyrightInfo = ({ copyright, phonographicCopyright }) => {
  return (
    <div className='text-sm'>
      {copyright === phonographicCopyright ? (
        <p>
          <span>&copy;</span>{' '}
          <span className='inline-block translate-y-px'>&#8471;</span>{' '}
          {copyright}
        </p>
      ) : (
        <>
          <p>
            <span>&copy;</span> {copyright}
          </p>
          <p>
            <span className='inline-block translate-y-px'>&#8471;</span>{' '}
            {phonographicCopyright}
          </p>
        </>
      )}
    </div>
  )
}

export default CopyrightInfo
