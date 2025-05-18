'use client'

import { useState } from 'react'

import HeroSection from '@/components/HeroSection'

const ArtistPage = () => {
  const [discographyType, setDiscographyType] = useState('Albums')

  const discography = [{ type: 'Albums' }, { type: 'Singles and EPs' }]

  return (
    <>
      <HeroSection
        title={'Central Cee'}
        verifiedArtist
        backgroundImage={'/assets/brandon-brown-396090-unsplash.jpg'}
      />

      <div className='relative z-20 mx-auto max-w-[1200px] space-y-10 px-4 pb-20 min-[767px]:pb-24 min-[991px]:px-8 min-[991px]:pb-[120px]'>
        <section>
          <h3 className='mb-4 text-h3'>Discography</h3>

          <div className='mb-5 flex gap-4'>
            {discography.map(({ type }) => (
              <span
                key={type}
                className={`rounded-full ${discographyType === type ? 'bg-white text-black' : 'bg-neutral-700 font-medium'} px-3 py-1 text-md`}
                onClick={() => setDiscographyType(type)}
              >
                {type}
              </span>
            ))}
          </div>

          {discographyType === 'Albums' && (
            <div className='no-scrollbar flex gap-5 overflow-x-scroll'>
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
          )}
        </section>

        <section>
          <h3 className='mb-4 text-h3'>Fans also like</h3>
          <div className='flex'>
            <div className='min-w-28 md:min-w-36 min-[992px]:min-w-48'>
              <div className='mb-3 aspect-square rounded-full bg-emerald-500'></div>
              <div>
                <p className='mb-1 text-lg font-semibold leading-none text-neutral-400'>
                  {'Name'}
                </p>
                <p className='text-sm text-neutral-400'>{'Artist'}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className='mb-4 text-h3'>Appears On</h3>
          <div className='no-scrollbar flex gap-5 overflow-x-scroll'>
            <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
              <div className='mb-3 aspect-square rounded-md bg-red-400'></div>
              <div>
                <p className='text-lg font-semibold leading-none text-neutral-400'>
                  {'Title'}
                </p>
                <div className='flex items-center gap-1 text-sm text-neutral-400'>
                  <span>{'2025'}</span>
                  <span className='h-1 w-1 rounded-full bg-neutral-400'></span>
                  <span>{'Album'}</span>
                </div>
              </div>
            </div>

            <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
              <div className='mb-3 aspect-square rounded-md bg-blue-400'></div>
              <div>
                <p className='text-lg font-semibold leading-none text-neutral-400'>
                  {'Title'}
                </p>
                <div className='flex items-center gap-1 text-sm text-neutral-400'>
                  <span>{'2025'}</span>
                  <span className='h-1 w-1 rounded-full bg-neutral-400'></span>
                  <span>{'Album'}</span>
                </div>
              </div>
            </div>

            <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
              <div className='mb-3 aspect-square rounded-md bg-orange-400'></div>
              <div>
                <p className='text-lg font-semibold leading-none text-neutral-400'>
                  {'Title'}
                </p>
                <div className='flex items-center gap-1 text-sm text-neutral-400'>
                  <span>{'2025'}</span>
                  <span className='h-1 w-1 rounded-full bg-neutral-400'></span>
                  <span>{'Album'}</span>
                </div>
              </div>
            </div>

            <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
              <div className='mb-3 aspect-square rounded-md bg-fuchsia-400'></div>
              <div>
                <p className='text-lg font-semibold leading-none text-neutral-400'>
                  {'Title'}
                </p>
                <div className='flex items-center gap-1 text-sm text-neutral-400'>
                  <span>{'2025'}</span>
                  <span className='h-1 w-1 rounded-full bg-neutral-400'></span>
                  <span>{'Album'}</span>
                </div>
              </div>
            </div>

            <div className='min-w-32 md:min-w-40 min-[992px]:min-w-52'>
              <div className='mb-3 aspect-square rounded-md bg-lime-400'></div>
              <div>
                <p className='text-lg font-semibold leading-none text-neutral-400'>
                  {'Title'}
                </p>
                <div className='flex items-center gap-1 text-sm text-neutral-400'>
                  <span>{'2025'}</span>
                  <span className='h-1 w-1 rounded-full bg-neutral-400'></span>
                  <span>{'Album'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className='mb-4 text-h3'>About</h3>
          <div
            className='relative aspect-square rounded-md bg-cover bg-center'
            style={{
              backgroundImage: `linear-gradient(rgba(21, 21, 21, 0), rgba(21, 21, 21, 0.9)), url('/assets/sabin-abayo-1067619-unsplash.jpg')`,
            }}
          >
            <p className='absolute bottom-5 mx-5 line-clamp-3 text-ellipsis'>
              With his fusion of dancehall, reggae, Afrobeat, and pop, Burna Boy
              is one of Nigeria&apos;s best-known stars. The LeriQ-produced 2012
              single &ldquo;Like to Party&rdquo; proved to be his breakout track
              and paved the way for his full-length debut, L.I.F.E, a year
              later. Over the next five years, Burna released two more albums
              and collaborated with a variety of artists, from and to and . His
              international exposure widened with 2018&apos;s Outside, which hit
              number three on the Billboard Reggae chart and won the Nigeria
              Entertainment Award for Album of the Year. 2019&apos;s African
              Giant and 2020&apos;s Twice as Tall were both widely acclaimed and
              charted in several countries. After becoming the first Nigerian to
              headline a show at Madison Square Garden, he released his hit
              sixth album, Love, Damini, in 2022, followed a year later by the
              Grammy-nominated I Told Them.... The single &ldquo;Bundle by
              Bundle&rdquo; teased his 2025 full-length No Sign of Weakness.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ArtistPage
