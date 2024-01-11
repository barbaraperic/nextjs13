import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]/route'
import NavLinks from './nav-links'
import { getServerSession } from 'next-auth/next'
import { Paragraph } from '../components/texts/texts'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <div className="w-screen bg-neutral h-screen relative text-base-100">
      <aside className="absolute pt-[60px] top-0 left-0 h-full  border-r border-accent w-[200px]">
        <NavLinks />
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] navbar flex items-center justify-between border-b border-accent">
          {session && (
            <>
              <Paragraph>Welcome {session?.user?.name}</Paragraph>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border border-accent">
                    <Image
                      width={32}
                      height={32}
                      alt="profile"
                      src={
                        session?.user?.image ??
                        'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                      }
                      className="rounded-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="text-lg">Sign out</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}
