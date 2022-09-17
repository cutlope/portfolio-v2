import { Fragment, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

let navItems: Array<{ name: string; href: string }> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Uses',
    href: '/uses',
  },
]

interface NavItemProps {
  href: string
  children: ReactNode
  asPath: string
}

interface BreadcrumbItemProps {
  isRoot?: boolean
  children: ReactNode
  href: string
  isCurrent?: boolean
}

interface IBreadcrumb {
  href: string
  label: string
  isCurrent: boolean
}

const NavItem = ({ href, children, asPath }: NavItemProps): JSX.Element => {
  return (
    <li>
      <Link
        href={href}
        className={cx(
          'hidden rounded-lg px-3 py-1 text-base text-gray-500 transition duration-200 hover:bg-gray-600 hover:bg-opacity-30 md:inline-block',
          asPath.split('/')[1] === href.replace('/', '') &&
            'bg-gray-600 bg-opacity-30 font-medium !text-accent hover:bg-opacity-40'
        )}
        noGradientUnderline>
        {children}
      </Link>
    </li>
  )
}

const BreadcrumbItem = ({
  isRoot,
  children,
  href,
  isCurrent,
}: BreadcrumbItemProps): JSX.Element => (
  <Fragment>
    {!isRoot && (
      <span aria-hidden='true' className='opacity-50'>
        /
      </span>
    )}
    <li>
      <Link
        href={href}
        className={cx(
          isCurrent
            ? 'bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent'
            : 'text-gray-300',
          'transition duration-200 hover:opacity-80'
        )}
        aria-current={isCurrent ? 'page' : 'false'}
        noGradientUnderline>
        {children}
      </Link>
    </li>
  </Fragment>
)

export const Header = () => {
  const { asPath } = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])
  return (
    <nav className='relative flex items-center justify-between px-8 my-4'>
      <ol aria-label='breadcrumb' className='flex space-x-2'>
        <BreadcrumbItem href='/' isRoot>
          ~
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map(({ href, label, isCurrent }) => (
            <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
              {label}
            </BreadcrumbItem>
          ))}
      </ol>
      <ul className='space-x-2 list-none hiden md:flex'>
        {navItems.map((item, index) => (
          <NavItem href={item.href} asPath={asPath} key={index}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
