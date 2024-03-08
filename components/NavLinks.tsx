'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiBook, FiClipboard, FiActivity, FiHome } from 'react-icons/fi'
import clsx from 'clsx'
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
          <Link key={link.name} href={link.href} className={styles.link}>
            <LinkIcon className={styles.icon} />
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks
