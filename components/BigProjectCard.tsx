import Image from 'next/image'
import Link from 'next/link'
import github from 'public/icons/github.svg'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { getGitDetails, cleanLink, basePathProject } from '@utils'

interface ProjectProps {
  slug: string
  name: string
  description: string
  link: string
  githubLink: string
  image: string
}

export const BigProjectCard = ({
  slug,
  name,
  description,
  image,
  link,
  githubLink,
}: ProjectProps) => {
  return (
    <div className=' flex min-h-[220px] transform flex-col space-y-8 rounded-lg border-[1px] p-5 transition-all hover:scale-[1.01] dark:bg-[#141c29] md:flex-row md:space-y-0 md:space-x-4'>
      <div className='overflow-hidden rounded-lg md:w-72'>
        <Link href={`/projects/${slug}`}>
          <div className='relative mx-auto h-52 max-w-[300px] transition duration-200 hover:opacity-60 md:h-full '>
            <Image
              src={basePathProject(image)}
              alt={name}
              className='rounded-lg'
              sizes='100vw'
              fill
            />
          </div>
        </Link>
      </div>
      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex flex-col space-y-2'>
          <Link
            className='transition duration-200 hover:opacity-60 dark:text-white'
            href={`/projects/${slug}`}>
            <h2 className='text-2xl font-bold'>{name}</h2>
          </Link>
          <p className='text-md text-gray-600 dark:text-gray-400'>
            {description}
          </p>
          <div className='flex flex-col space-y-2 dark:text-white md:flex-row md:items-center md:space-x-5 md:space-y-0'>
            {link && (
              <a
                href={`https://${link}`}
                className='flex transform items-center gap-x-1 transition-all hover:scale-[1.01]'>
                {cleanLink(link)}
                <ArrowUpRightIcon className='h-4 w-4' />
              </a>
            )}
            {githubLink && (
              <Link
                className='flex transform items-center gap-x-2 transition-all hover:scale-[1.01]'
                href={githubLink}>
                <Image
                  className='dark:invert '
                  width={20}
                  height={20}
                  src={github}
                  alt='logo'></Image>
                {getGitDetails(githubLink)}{' '}
              </Link>
            )}
          </div>
        </div>
        <Link
          className='flex items-center pt-4 hover:underline hover:decoration-blue-600 dark:text-white'
          href={`/projects/${slug}`}>
          Learn More
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='ml-1 h-6 w-6 pt-1'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
