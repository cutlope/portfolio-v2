import { Tooltip } from '@nextui-org/react'
import { Work, Project } from '.contentlayer/generated'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function basePath(url: string) {
  return '/icons/' + url
}

type IProjectProps =
  | {
      isWork: true
      work: Work
    }
  | {
      isWork: false
      work: Project
    }

export const Projects = ({ isWork, work }: IProjectProps): JSX.Element => {
  return (
    <div className='flex flex-col space-y-8 '>
      <div
        key={work._id}
        className='border-tertiary bg-secondary hover:border-accent group relative rounded-2xl border-[1px] p-4 transition duration-200 md:hover:scale-[1.02] '>
        <Link
          className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 '
          href={`/projects/${work.slug}`}>
          <img
            src={basePath(work.iconName!)}
            alt={work.name}
            className='sm:mt- h-12 w-12 rounded-xl bg-white/95 p-1 shadow-md dark:shadow-white/50 '
          />
          <div className='flex-col space-y-2'>
            <div className='flex flex-row flex-wrap items-center justify-between gap-y-1.5 gap-x-7 text-lg font-semibold dark:text-white '>
              <h3 className='pr-4'>{work.name}</h3>
              {isWork ? (
                <div>
                  <span className='border-b text-sm dark:text-gray-200 sm:mr-7 md:mr-2 '>
                    {work.duration}
                  </span>
                </div>
              ) : null}
            </div>
            <p className='text-md text-gray-600 dark:text-gray-400'>
              {work.description}
            </p>

            <div className='flex flex-row flex-wrap items-center gap-x-10 gap-y-1.5 '>
              {isWork ? (
                <div>
                  <span className='max-w-max  border-gray-400 text-gray-800 dark:text-gray-300'>
                    Role:{' '}
                  </span>
                  <span className='border-b dark:text-gray-200'>
                    {work.role}
                  </span>
                </div>
              ) : (
                <div>
                  <span className='max-w-max  border-gray-400 text-gray-800 dark:text-gray-300'>
                    Timeframe:{' '}
                  </span>
                  <span className='border-b dark:text-gray-200'>
                    {work.duration}
                  </span>
                </div>
              )}

              <div className='flex flex-wrap items-center gap-3 dark:invert  '>
                <span className='max-w-max  border-gray-400 text-gray-800 dark:text-gray-300 dark:!invert'>
                  Tech Stack:{' '}
                </span>
                {work.techStack?.map((tech) => (
                  <Tooltip content={tech.title} key={tech.title}>
                    <Image
                      alt={tech.title!}
                      src={basePath(tech.iconName!)}
                      width='30'
                      height='30'></Image>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {(work.websiteUrl || work.githubUrl) && (
          <a
            className='border-accent bg-accent text-tertiary hover:bg-secondary hover:text-accent absolute -top-2 -right-2 hidden rounded-full border-[1px] p-1.5 opacity-0 transition group-hover:block group-hover:opacity-100'
            href={`https://${work.websiteUrl || work.githubUrl}`}
            target='_blank'
            rel='noopener noreferrer'>
            <ArrowTopRightOnSquareIcon className='h-4 w-4 dark:invert' />
          </a>
        )}
      </div>
    </div>
  )
}
