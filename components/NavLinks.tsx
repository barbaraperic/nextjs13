'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiBook, FiClipboard, FiActivity, FiHome } from 'react-icons/fi'
import clsx from 'clsx'
import { Paragraph } from './texts/texts'
import styles from './NavLinks.module.scss'

const NavLinks = () => {
  const pathname = usePathname()

  const links = [
    // {
    //   name: 'Get started',
    //   href: '/dashboard/home',
    //   icon: FiHome,
    // },
    {
      name: 'Collection',
      href: '/dashboard/home',
      icon: FiBook,
    },
    // {
    //   name: 'Mind Map',
    //   href: '/dashboard/mindmap',
    //   icon: FiClipboard,
    // },
    { name: 'Statistics', href: '/dashboard/statistics', icon: FiActivity },
  ]

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={styles.link}
            // className={clsx(
            //   'flex h-[48px] group grow items-center justify-center gap-2 bg-neutral p-3 text-sm font-medium hover:bg-base-content text-neutral-content hover:text-primary-dark md:flex-none md:justify-start md:p-2 md:px-3',
            //   pathname === link.href && 'text-primary-dark bg-base-content'
            // )}
          >
            <LinkIcon className={styles.icon} />
            <Paragraph>{link.name}</Paragraph>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks
