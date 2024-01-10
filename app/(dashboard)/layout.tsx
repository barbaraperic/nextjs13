import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]/route'
import NavLinks from './nav-links'
import { getServerSession } from 'next-auth/next'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute pt-[60px] top-0 left-0 h-full border-r border-black/10 w-[200px]">
        <NavLinks />
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
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
        </header>
      </div>
      <div className="h-[calc(100vh-60px)]">{children}</div>
    </div>
  )
}
