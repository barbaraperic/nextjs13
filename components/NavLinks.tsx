'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiBook, FiClipboard, FiActivity, FiHome } from 'react-icons/fi'
import clsx from 'clsx'
import { Paragraph } from './texts/texts'

const NavLinks = () => {
  const pathname = usePathname()

  const links = [
    {
      name: 'Get started',
      href: '/dashboard/home',
      icon: FiHome,
    },
    {
      name: 'Collection',
      href: '/dashboard/collection',
      icon: FiBook,
    },
    {
      name: 'Mind Map',
      href: '/dashboard/mindmap',
      icon: FiClipboard,
    },
    { name: 'Statistics', href: '/dashboard/statistics', icon: FiActivity },
  ]

  return (
    <>
      {links.map((link) => {
        console.log(pathname === link.href)
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] group grow items-center justify-center gap-2 bg-neutral p-3 text-sm font-medium hover:bg-base-content text-neutral-content hover:text-primary-dark md:flex-none md:justify-start md:p-2 md:px-3',
              pathname === link.href && 'text-primary-dark bg-base-content'
            )}
          >
            <div className="transition-transform transform group-hover:scale-105 flex space-x-4">
              <LinkIcon className="w-6 h-6 peer" />
              <Paragraph className="hidden md:block">{link.name}</Paragraph>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks
