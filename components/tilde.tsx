import { useRouter } from 'next/router'
import { useEffect, useState, ReactNode, Fragment } from 'react'
import Link from 'next/link'
import cx from 'classnames'

interface IBreadcrumb {
  href: string
  label: string
  isCurrent: boolean
}

interface BreadcrumbItemProps {
  isRoot?: boolean
  children: ReactNode
  href: string
  isCurrent?: boolean
}

const BreadcrumbItem = ({
  isRoot,
  children,
  href,
  isCurrent,
}: BreadcrumbItemProps): JSX.Element => (
  <Fragment>
    {!isRoot && (
      <span
        aria-hidden='true'
        className='text-gray-700 opacity-50 dark:text-gray-100 '>
        /
      </span>
    )}
    <li>
      <Link href={href} aria-current={isCurrent ? 'page' : 'false'}>
        <a
          className={cx(
            isCurrent
              ? 'bg-gradient-to-l from-cyan-300 to-cyan-400 bg-clip-text font-bold  text-transparent'
              : 'text-black/50 dark:text-white',
            'font-mono text-black transition duration-200  hover:opacity-80'
          )}>
          {children}
        </a>
      </Link>
    </li>
  </Fragment>
)

export const Tilde = (): JSX.Element => {
  const { asPath } = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])

  useEffect(() => {
    const path = asPath.replace(/#.*/, '') //Remove trailing slash from path
    const pathWithoutQuery = path.split('?')[0] //Remove query params from path
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()
    pathArray = pathArray.filter((path) => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: path,
        isCurrent: index === pathArray.length - 1,
      }
    })

    setBreadcrumbs(breadcrumbs)
  }, [asPath])

  return (
    <ol aria-label='breadcrumb' className='flex space-x-2 capitalize '>
      <BreadcrumbItem href='/' isRoot>
        <span
          className={cx(
            asPath === '/'
              ? 'bg-gradient-to-l from-cyan-200 to-cyan-400 bg-clip-text font-bold text-transparent'
              : null
          )}>
          ~
        </span>
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  )
}
