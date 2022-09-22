import { GetStaticPaths, GetStaticProps } from 'next'
import { allProjects, Project, allWorks, Work } from 'contentlayer/generated'
// import { useMDXComponent } from 'next-contentlayer/hooks'
import { getGitDetails, cleanLink, basePathProject, basePath } from '@utils'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import github from 'public/icons/github.svg'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

type params = { slug: string }
type Props = { project?: Project | Work | null }

export default function ProjectPage({ project }: { project: Project | Work }) {
  //   const ProjectMDX = useMDXComponent(project.body.code)

  return (
    <>
      <NextSeo
        title={`${project.name} | Abdullah Riaz`}
        description={project.description}
      />
      <div className='mt-8 flex items-center space-x-8'>
        <img
          src={basePath(project.iconName as string)}
          alt={project.name}
          className='bg-tertiary h-16 w-16 rounded-xl bg-white/95  p-2 shadow-md dark:shadow-white/50'
        />
        <div className='flex flex-col space-y-2'>
          <h1 className='text-2xl font-bold dark:text-white'>{project.name}</h1>
          <p className='text-sm dark:text-gray-400'>{project.description}</p>
        </div>
      </div>

      <div className='mt-6 flex flex-col space-y-2 dark:text-white md:flex-row md:space-y-0 md:space-x-4 '>
        {project.websiteUrl && (
          <a
            href={`https://${project.websiteUrl}`}
            className='flex transform items-center gap-x-1 transition-all hover:scale-[1.01]  hover:underline hover:decoration-blue-600'>
            {cleanLink(project.websiteUrl)}
            <ArrowUpRightIcon className='h-4 w-4' />
          </a>
        )}

        {project.githubUrl && (
          <Link href={project.githubUrl}>
            <a className='flex transform items-center gap-x-2 transition-all hover:scale-[1.01]  hover:underline hover:decoration-blue-600 '>
              <Image
                className='dark:invert '
                width={20}
                height={20}
                layout='fixed'
                src={github}
                alt='logo'></Image>
              {getGitDetails(project.githubUrl)}{' '}
            </a>
          </Link>
        )}
      </div>

      <div className='border-tertiary mt-14 overflow-hidden rounded-xl border-[1px] p-2'>
        <Image
          width='1200'
          height='632'
          src={basePathProject(project.image as string)}
          className='rounded-xl'
          alt={project.name}
        />
      </div>

      <article>
        <div className='prose my-12 max-w-full leading-8'>
          {/* <ProjectMDX components={{ ...MDXComponents }} /> */}
        </div>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, params> = async ({
  params,
}) => {
  let project = allProjects.find((project) => project.slug === params?.slug)
  const work = allWorks.find((work) => work.slug === params?.slug)
  if (project) {
    return {
      props: {
        project,
      },
    }
  }
  if (work) {
    let project = work
    return {
      props: {
        project,
      },
    }
  }
  return {
    props: {
      project: null,
    },
  }
}
export const getStaticPaths: GetStaticPaths<params> = async () => {
  let paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }))

  const workPath = allWorks.map((work) => ({
    params: { slug: work.slug },
  }))

  paths = paths.concat(workPath)
  return {
    paths,
    fallback: false,
  }
}
