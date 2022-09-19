import { allWorks } from '.contentlayer/generated'
import { Tooltip } from '@nextui-org/react'

import {
  ArrowSmallRightIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function basePath(url: string) {
  return '/icons/' + url
}

export const Works = (): JSX.Element => {
  return (
    <div className='my-16 flex flex-col'>
      <h2 className='mb-6 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-4xl'>
        Featured Work Experience
      </h2>
      <div className='flex flex-col space-y-8'>
        {allWorks.slice(0, 3).map((work) => (
          <div
            key={work._id}
            className='border-tertiary bg-secondary hover:border-accent group relative rounded-lg border-[1px] p-4 transition duration-200 md:hover:scale-[1.02]'>
            <Link href={`/projects/${work.slug}`}>
              <a className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <img
                  src={basePath(work.iconName!)}
                  alt={work.name}
                  className='h-12 w-12 rounded-xl bg-white p-1.5 shadow-md sm:mt-'
                />
                <div className='flex-col space-y-2'>
                  <div className='flex flex-row flex-wrap items-center gap-y-1.5 text-lg font-semibold dark:text-white '>
                    <h3 className='pr-4'>{work.name}</h3>
                    <div className='flex flex-wrap gap-3 dark:invert '>
                      {work.techStack?.map((tech) => (
                        <Tooltip content={tech.title} key={tech.title}>
                          <Image
                            alt='Technology icon'
                            src={basePath(tech.iconName!)}
                            width='30'
                            height='30'></Image>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                  <p className='text-md text-gray-600 dark:text-gray-400'>
                    {work.description}
                  </p>
                  <div className='flex flex-row items-center gap-x-10 flex-wrap gap-y-1.5 '>
                    <div>
                      <span className='max-w-max  border-gray-400 text-gray-800 dark:text-gray-300'>
                        Role:{' '}
                      </span>
                      <span className='border-b dark:text-gray-200'>
                        {work.role}
                      </span>
                    </div>
                    <div>
                      <span className='max-w-max  border-gray-400 text-gray-800 dark:text-gray-300'>
                        Duration:{' '}
                      </span>
                      <span className='border-b dark:text-gray-200'>
                        {work.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {(work.websiteUrl || work.githubUrl) && (
              <a
                className='border-accent bg-accent text-tertiary hover:bg-secondary hover:text-accent absolute -top-2 -right-2 hidden rounded-full border-[1px] p-1.5 opacity-0 transition group-hover:block group-hover:opacity-100'
                href={work.websiteUrl || work.githubUrl}
                target='_blank'
                rel='noopener noreferrer'>
                <ArrowTopRightOnSquareIcon className='h-4 w-4 dark:invert' />
              </a>
            )}
          </div>
        ))}
      </div>
      <Link href='/work'>
        <a className='group mt-8 flex items-center justify-start space-x-2 text-xl font-medium dark:text-white'>
          <span>View All Work Experience </span>
          <ArrowSmallRightIcon className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
        </a>
      </Link>
    </div>
  )
}
