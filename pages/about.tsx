import { SkillBox } from '@components'
import { NextSeo } from 'next-seo'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { allSkills } from '.contentlayer/generated'

function basePath(url: string): string {
  return '/icons/' + url
}

export default function About() {
  return (
    <>
      <NextSeo title='About - Abdullah Riaz' description='The story so far' />
      <section className='mb-5'>
        <div className='grid items-center gap-y-6 dark:text-white md:grid-cols-2 md:gap-0'>
          <h2 className='text-5xl'>About</h2>
        </div>
        <div className='mt-10 h-10 w-10 dark:invert'>
          <ArrowDownIcon />
        </div>
      </section>
      <div className='font-body space-y-5 text-lg text-zinc-600 dark:text-zinc-400'>
        <p>
          I love to code because I enjoy the challenge of solving problems, no
          matter how big or minor they are. I simply love the feeling of
          accomplishment that follows when I get something to work how I want it
          to. I also love to learn new things and try to implement them in my
          projects. I have been coding for about 3 years and have worked on a
          variety of projects.
        </p>
      </div>

      <h2 className='my-10 max-w-max border-b-2 border-black text-3xl dark:border-white dark:text-white'>
        Skills
      </h2>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 '>
        {allSkills[0]['techStack'].map((skill) => (
          <SkillBox
            key={skill.title}
            title={skill.title}
            description={skill.description}
            logo={basePath(skill.iconName as string)}
          />
        ))}
      </div>
    </>
  )
}
