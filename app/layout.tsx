import './globals.css'
import type { Metadata } from 'next'
import { Inria_Sans } from '@next/font/google'
import Provider from '@/app/context/client-provider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'Tartaruga',
  description: 'Learn Portuguese',
  icons: {
    icon: './favicon.ico',
  },
}

const body = Inria_Sans({
  variable: '--body-font',
  weight: '400',
  preload: false,
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={` ${body.variable}`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
