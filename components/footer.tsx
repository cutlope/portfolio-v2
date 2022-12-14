import { Socials } from './socials'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = (): JSX.Element => {
  let year = new Date().getFullYear()
  return (
    <footer className='my-10 border-t-2 border-black pt-10 dark:border-white'>
      <div className='mb-20 grid grid-flow-row grid-cols-1 justify-items-stretch gap-y-10 md:grid-cols-2 md:gap-y-0'>
        <div className='flex flex-col space-y-6'>
          <div className='flex flex-col space-y-6'>
            <div className='max-w-max border-b border-black dark:border-white dark:text-white '>
              Currently listening to
            </div>
            <div className='flex items-center space-x-2 text-xl font-medium dark:text-white'>
              <Image
                width='130'
                height='41'
                style={{ maxWidth: '100%', height: 'auto' }}
                src='/icons/spotify.svg'
                className='dark:invert'
                alt='Spotify Logo'></Image>
              <div>Not Playing</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-6 md:items-end'>
          <div className='max-w-max border-b border-black dark:border-white dark:text-white'>
            You can find me here.
          </div>
          <div className='md:!items-start'>
            <Socials isFooter={true} />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <div className='dark:text-gray-400 '>
          The source code for this portfolio can be found{' '}
          <a
            className='text-blue-400 transition duration-200 hover:text-blue-300 hover:underline hover:decoration-blue-400'
            href='https://github.com/cutlope/portfolio-v2'
            target='_blank'
            rel='noreferrer'>
            here
          </a>
        </div>
        <div className='dark:text-white/80 '>© {year} Abdullah Riaz</div>
      </div>
    </footer>
  )
}
