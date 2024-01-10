'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiBook, FiHome, FiClipboard } from 'react-icons/fi'
import clsx from 'clsx'
import { Paragraph } from '../components/texts/texts'

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: FiHome,
    },
    {
      name: 'Collection',
      href: '/collection',
      icon: FiBook,
    },
    {
      name: 'Statistics',
      href: '/statistics',
      icon: FiClipboard,
    },
  ]

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] group grow items-center justify-center gap-2 bg-neutral p-3 text-sm font-medium hover:bg-base-content text-neutral-content hover:text-base-100 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-base-content text-base-100': pathname === link.href,
              }
            )}
          >
            {/* <div className="transition-transform transform group-hover:scale-105 flex space-x-4">
              <LinkIcon className="w-6 h-6 peer" />
              <Paragraph className="hidden md:block">{link.name}</Paragraph>
            </div> */}
          </Link>
        )
      })}
    </>
  )
}
