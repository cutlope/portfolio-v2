import type { NextPage } from 'next'
import { Tooltip } from '@nextui-org/react'
import { Works } from '@components'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/cutlope/ ',
    icon: () => (
      <svg
        width='40'
        height='40'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M23.9999 1.91992C11.8252 1.91992 1.91992 11.8242 1.91992 23.9999C1.91992 36.1756 11.8252 46.0799 23.9999 46.0799C36.1746 46.0799 46.0799 36.1756 46.0799 23.9999C46.0799 11.8242 36.1746 1.91992 23.9999 1.91992ZM17.2799 33.5999H13.4399V19.1999H17.2799V33.5999ZM15.3599 16.3199C14.2991 16.3199 13.4399 15.4607 13.4399 14.3999C13.4399 13.3391 14.2991 12.4799 15.3599 12.4799C16.4207 12.4799 17.2799 13.3391 17.2799 14.3999C17.2799 15.4607 16.4207 16.3199 15.3599 16.3199ZM35.5199 33.5999H31.6799V28.7999V26.3999C31.6799 24.5519 30.1679 23.0399 28.3199 23.0399C26.4719 23.0399 24.9599 24.5519 24.9599 26.3999V33.5999H21.1199V19.1999H24.9599V20.9433C26.0812 19.8662 27.6018 19.1999 29.2799 19.1999C32.7263 19.1999 35.5199 21.9935 35.5199 25.4399V33.5999Z'
          fill='black'
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdullahri/',
    icon: () => (
      <svg
        width='40'
        height='40'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M20.9743 1.16064C10.6033 2.32111 2.26139 10.9085 1.13411 21.3527C0.00682162 32.261 6.09415 42.0089 15.3379 45.7224C16.0143 45.9545 16.6906 45.4903 16.6906 44.5619V40.8484C16.6906 40.8484 15.7888 41.0805 14.6615 41.0805C11.5051 41.0805 10.1524 38.2954 9.92692 36.6708C9.70146 35.7424 9.25055 35.0461 8.57418 34.3499C7.89781 34.1178 7.67235 34.1178 7.67235 33.8857C7.67235 33.4215 8.34872 33.4215 8.57418 33.4215C9.92692 33.4215 11.0542 35.0461 11.5051 35.7424C12.6324 37.5992 13.9851 38.0633 14.6615 38.0633C15.5633 38.0633 16.2397 37.8312 16.6906 37.5991C16.9161 35.9745 17.5924 34.3499 18.9452 33.4215C13.7597 32.261 9.92692 29.2438 9.92692 24.1378C9.92692 21.5848 11.0542 19.0318 12.6324 17.175C12.4069 16.7108 12.1815 15.5504 12.1815 13.9257C12.1815 12.9974 12.1815 11.6048 12.8579 10.2122C12.8579 10.2122 16.0143 10.2122 19.1706 13.2294C20.2979 12.7653 21.8761 12.5332 23.4543 12.5332C25.0325 12.5332 26.6107 12.7653 27.9635 13.2294C30.8944 10.2122 34.2762 10.2122 34.2762 10.2122C34.7272 11.6048 34.7272 12.9974 34.7272 13.9257C34.7272 15.7825 34.5017 16.7108 34.2762 17.175C35.8544 19.0318 36.9817 21.3527 36.9817 24.1378C36.9817 29.2438 33.149 32.261 27.9635 33.4215C29.3162 34.5819 30.218 36.6708 30.218 38.7596V44.794C30.218 45.4903 30.8944 46.1866 31.7962 45.9545C40.1381 42.4731 46 34.1178 46 24.3699C46 10.4443 34.5017 -0.464003 20.9743 1.16064Z'
          fill='black'
        />
      </svg>
    ),
  },
]

const Home: NextPage = () => {
  return (
    <div className='pl-3'>
      <div className='flex flex-col-reverse items-start sm:flex-row'>
        <div className='flex flex-col md:pr-8'>
          <h1 className='mb-2 overflow-hidden font-mono text-4xl font-semibold dark:text-gray-100 sm:text-6xl'>
            Hello There!
            <span className='inline-block origin-[70%_70%] animate-[wave_3s_ease-in-out_4] pb-4 text-3xl sm:text-5xl'>
              👋🏼
            </span>
            <br className='block ' />
            I&apos;m{' '}
            <span className='relative'>
              <span className='text-brand-accent overflow-x-hidden whitespace-nowrap pt-2 '>
                Abdullah
              </span>
              <span
                className="absolute left-0 -bottom-0 -top-1 inline-block w-full animate-type bg-zinc-50 will-change-transform [font-family:monospace] after:absolute after:block after:h-full after:w-2
              after:animate-cursor after:bg-gray-900 after:content-[''] dark:bg-gray-900 after:dark:bg-gray-100"></span>
            </span>
          </h1>
          <h2 className='mb-4 text-gray-700 dark:text-gray-200'>
            Full-Stack Developer ~ Tech Enthusiast
          </h2>
          <p className='mb-4 text-gray-600 dark:text-gray-400 '>
            Designing and developing meaningful, results-driven websites and
            applications that are fast and built to last.
          </p>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex space-x-4 dark:invert'>
          {socials.map((social) => (
            <Tooltip content={social.name} key={social.name}>
              <a
                href={social.href}
                target='_blank'
                rel='noreferrer'
                aria-label={social.name}>
                {social.icon()}
              </a>
            </Tooltip>
          ))}
        </div>
        <div className='my-20 flex flex-col'>
          <h3 className='mb-6 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-4xl'>
            Featured Projects
          </h3>
        </div>
        <Works />
      </div>
    </div>
  )
}

export default Home
