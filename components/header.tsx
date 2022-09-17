import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'
import { Popover, Transition } from '@headlessui/react'
import {
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

let navItems: Array<{ name: string; href: string }> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Uses',
    href: '/uses',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Resume',
    href: '/resume.pdf',
  },
]

interface MyLinkProps {
  href: string
  children: string
  className?: string
}

function MyLink({ href, children, ...rest }: MyLinkProps) {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

interface MobileNavItemProps {
  href: string
  children: string
}

function MobileNavItem({ href, children }: MobileNavItemProps) {
  return (
    <li>
      <Popover.Button as={MyLink} href={href} className='block py-2'>
        {children}
      </Popover.Button>
    </li>
  )
}

interface NavItemProps {
  className: string
}

function MobileNavigation(props: NavItemProps) {
  return (
    <Popover {...props}>
      <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        Menu
        <ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                <XMarkIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
              </Popover.Button>
              <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                Navigation
              </h2>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                {navItems.map((item) => (
                  <MobileNavItem key={item.name} href={item.href}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type='button'
      aria-label='Toggle dark mode'
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={toggleMode}>
      <SunIcon className='h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600' />
      <MoonIcon className='hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500' />
    </button>
  )
}

export const Header = () => {
  const { asPath } = useRouter()
  return (
    <header>
      <nav className='relative mb-10 flex items-center justify-end space-x-3 md:justify-between md:space-x-0'>
        <MobileNavigation className='pointer-events-auto md:hidden' />
        <ul className='hidden space-x-2 md:flex'>
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <a
                className={cx(
                  asPath === item.href
                    ? 'font-semibold text-gray-800 dark:text-gray-200'
                    : 'font-normal text-gray-600 dark:text-gray-400',
                  'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
                )}>
                {item.name}
              </a>
            </Link>
          ))}
        </ul>
        <div className='pointer-events-auto'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
