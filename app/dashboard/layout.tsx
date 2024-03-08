import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import NavLinks from '@/components/NavLinks'
import SignOutButton from '@/components/SignOutButton'
import styles from './layout.module.scss'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <NavLinks />
      </aside>
      <header className={styles.header}>
        {session && (
          <>
            <p>Welcome {session?.user?.name}</p>
          </>
        )}
        <ul role="navigation" className={styles['avatar-navigation']}>
          <li className={styles['avatar-dropdown']}>
            <Image
              width={36}
              height={36}
              alt="profile"
              src={
                session?.user?.image ??
                'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              }
              className={styles.avatar}
            />
            <ul className={styles.dropdown}>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
