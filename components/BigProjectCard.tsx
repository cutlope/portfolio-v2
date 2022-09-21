import Image from 'next/image'
import Link from 'next/link'
import github from 'public/icons/github.svg'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface ProjectProps {
  slug: string
  name: string
  description: string
  link: string
  githubLink: string
  image: string
}

function basePath(url: string) {
  return '/showcase/' + url
}
function cleanLink(link: string): string {
  return link.replace(/^https?:\/\//, '')
}

function getGitDetails(link: string): string {
  const [, owner, repo] = link.match(/github.com\/([^/]+)\/([^/]+)/) || []
  return `${owner}/${repo}`
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
    <div className=' flex min-h-[220px] transform flex-col space-y-8 rounded-lg border-[1px] p-5 transition-all hover:scale-[1.01] dark:bg-[#171E28] md:flex-row md:space-y-0 md:space-x-4'>
      <div className='overflow-hidden rounded-lg md:w-72'>
        <Link href={`/projects/${slug}`}>
          <div className='relative mx-auto h-36 max-w-[300px] transition duration-200 hover:opacity-60 md:h-full '>
            <Image
              src={basePath(image)}
              alt={name}
              className='rounded-lg'
              layout='fill'
            />
          </div>
        </Link>
      </div>
      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex flex-col space-y-2'>
          <Link href={`/projects/${slug}`}>
            <a className='transition duration-200 hover:opacity-60 dark:text-white'>
              <h2 className='text-2xl font-bold'>{name}</h2>
            </a>
          </Link>
          <p className='text-md text-gray-600 dark:text-gray-400'>
            {description}
          </p>
          <div className='flex flex-col space-y-2 dark:text-white md:flex-row md:items-center md:space-x-5 md:space-y-0'>
            {link && (
              <Link href={link}>
                <a className='flex transform items-center gap-x-1 transition-all hover:scale-[1.01]'>
                  {cleanLink(link)}
                  <ArrowUpRightIcon className='h-4 w-4' />
                </a>
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink}>
                <a className='flex transform items-center gap-x-2 transition-all hover:scale-[1.01] '>
                  <Image
                    className='dark:invert '
                    width={20}
                    height={20}
                    layout='fixed'
                    src={github}
                    alt='logo'></Image>
                  {getGitDetails(githubLink)}{' '}
                </a>
              </Link>
            )}
          </div>
        </div>
        {/* <Link href={`/projects/${slug}`}>
          <a className='pt-4 dark:text-white'>
            Learn More
          </a>
        </Link> */}
      </div>
    </div>
  )
}