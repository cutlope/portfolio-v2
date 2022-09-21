import { BigProjectCard } from '@components'
import { allProjects, allWorks } from 'contentlayer/generated'
import { NextSeo } from 'next-seo'

export default function Projects() {
  return (
    <>
      <NextSeo
        title='Projects - Abdullah Riaz'
        description="Here are some of my projects that I've worked on"
      />
      <h1 className='mb-8 text-2xl font-bold dark:text-white'>Works</h1>
      <div className='mb-8 flex-col space-y-8'>
        {allWorks.map((work) => (
          <BigProjectCard
            key={work._id}
            slug={work.slug}
            name={work.name}
            description={work.description}
            image={work.image as string}
            link={work.websiteUrl as string}
            githubLink={work.githubUrl as string}
          />
        ))}
      </div>
      <h1 className='mb-8 text-2xl font-bold dark:text-white'>Projects</h1>
      <div className='flex-col space-y-8'>
        {allProjects.map(
          (project) => (
            console.log(project),
            (
              <BigProjectCard
                key={project._id}
                slug={project.slug}
                name={project.name}
                description={project.description}
                image={project.image as string}
                link={project.websiteUrl as string}
                githubLink={project.githubUrl as string}
              />
            )
          )
        )}
      </div>
    </>
  )
}
