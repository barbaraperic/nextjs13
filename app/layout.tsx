import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro, Mulish } from '@next/font/google'
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

const maven = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven',
  display: 'swap',
})

const muli = Mulish({
  subsets: ['latin'],
  variable: '--font-muli',
  weight: '400',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${maven.variable} ${muli.variable}`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
