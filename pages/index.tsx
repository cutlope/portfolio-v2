import type { NextPage } from 'next'
import { Projects, Socials } from '@components'
import { allWorks, allProjects } from '.contentlayer/generated'
import Link from 'next/link'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Abdullah Riaz - Full Stack Developer'
        description="I'm Abdullah Riaz, a full stack web developer. Designing and developing meaningful, results-driven websites and
        applications that are fast and built to last."
      />
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
          <Socials isFooter={false} />
          <div className='mt-6 flex flex-col gap-y-5'>
            <h2 className='mb-1 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-4xl '>
              Work History
            </h2>
            {allWorks.slice(0, 3).map((work, index) => (
              <Projects key={index} isWork={true} work={work} />
            ))}
            <Link href='/projects'>
              <a className='group mt-2 flex items-center justify-start space-x-2 text-xl font-medium hover:underline hover:decoration-emerald-400 dark:text-white'>
                <span>View All Work History</span>
                <ArrowSmallRightIcon className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
              </a>
            </Link>
          </div>

          <div className='my-10 flex flex-col gap-y-5 '>
            <h2 className='mb-1 text-2xl font-semibold  tracking-tight text-black dark:text-white md:text-4xl '>
              Projects
            </h2>
            {allProjects.slice(0, 3).map((project, index) => (
              <Projects key={index} isWork={false} work={project} />
            ))}
            <Link href='/projects'>
              <a className='group flex items-center justify-start space-x-2 text-xl font-medium hover:underline hover:decoration-blue-400 dark:text-white '>
                <span>View All Projects</span>
                <ArrowSmallRightIcon className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
