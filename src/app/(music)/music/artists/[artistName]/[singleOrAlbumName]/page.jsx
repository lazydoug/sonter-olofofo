import ArtistAvatar from '@/components/music/ArtistAvatar'
import CopyrightInfo from '@/components/music/CopyrightInfo'
import Image from 'next/image'

const SingleAndAlbumDetailsPage = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-[#6e5731] to-transparent pb-10 pt-16'>
        <div className='relative mx-auto aspect-square w-2/3 shadow-[0_0_50px_rgba(0,0,0,0.60)]'>
          <Image src='/assets/khaid-for-you.webp' alt='Cover art' fill />
        </div>
      </div>

      <div className='px-4'>
        <div>
          <h3 className='mb-2 text-h3'>FOR YOU</h3>

          <ArtistAvatar />

          {/* type and release year */}
          <div className='mt-1 flex items-center gap-1 text-sm text-grey-400'>
            <p>Single</p>
            <span className='h-1 w-1 rounded-full bg-grey-400'></span>
            <p>2025</p>
          </div>
        </div>

        {/* track(s) */}
        <div className='my-5 space-y-5'>
          <div>
            <p>FOR YOU</p>

            <div className='flex items-center gap-1 text-grey-400'>
              <Image
                src='/assets/explicit.png'
                alt='Explicit content'
                width={16}
                height={16}
              />
              <p className='text-sm'>Khaid</p>
            </div>
          </div>
        </div>

        {/* release date & duration */}
        <div className='mb-4 text-sm'>
          <p>20 March 2025</p>
          <div className='-mt-1 flex items-center gap-1'>
            <p>1 song</p>
            <span className='h-1 w-1 rounded-full bg-white'></span>
            <p>2min</p>
          </div>
        </div>

        <ArtistAvatar large href='../a' />

        <div className='mt-10 space-y-10'>
          {/* more by artist */}
          <section>
            <h4 className='mb-2 text-h4'>{`More by Artist`}</h4>

            <div className='no-scrollbar flex gap-4 overflow-x-scroll'>
              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-red-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-blue-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-orange-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-fuchsia-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-lime-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* similar recommendations */}
          <section>
            <h4 className='mb-2 text-h4'>You might also like</h4>

            <div className='no-scrollbar flex gap-4 overflow-x-scroll'>
              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-fuchsia-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-lime-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-red-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-blue-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>

              <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
                <div className='mb-3 aspect-square rounded-md bg-orange-400'></div>
                <div>
                  <p className='text-lg font-semibold leading-none text-neutral-400'>
                    {'Title'}
                  </p>
                  <p className='text-sm text-neutral-400'>{'2025'}</p>
                </div>
              </div>
            </div>
          </section>

          <CopyrightInfo
            copyright={'2025 NEVILLE RECORDS'}
            phonographicCopyright={'2025 NEVILLE RECORDS'}
          />
        </div>
      </div>
    </>
  )
}

export default SingleAndAlbumDetailsPage
