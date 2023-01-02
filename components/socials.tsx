import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/cutlope/ ',
    icon: '/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdullahri/',
    icon: '/icons/linkedin.svg',
  },
]

interface ISocialsProps {
  isFooter?: boolean
}

export const Socials = ({ isFooter }: ISocialsProps): JSX.Element => {
  return (
    <div className='mb-7 flex space-x-4 dark:invert'>
      {socials.map((social) => (
        <Tooltip content={social.name} key={social.name}>
          <a
            href={social.href}
            target='_blank'
            rel='noreferrer'
            aria-label={social.name}>
            <Image src={social.icon} alt={social.name} width={40} height={40} />
          </a>
        </Tooltip>
      ))}
      {isFooter ? (
        <Tooltip content='Email' key='Email'>
          <a
            href='mailto:hey@cutlope.dev'
            target='_blank'
            rel='noreferrer'
            aria-label='Email'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-10 w-10'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
          </a>
        </Tooltip>
      ) : null}
    </div>
  )
}
