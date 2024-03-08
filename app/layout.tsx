import './globals.scss'
import type { Metadata } from 'next'
import { Covered_By_Your_Grace, Chivo, Mulish } from '@next/font/google'
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

const covered_by_your_grace = Covered_By_Your_Grace({
  subsets: ['latin'],
  variable: '--font-covered-by-your-grace',
  display: 'swap',
  weight: '400',
})

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
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
        className={`${covered_by_your_grace.variable} ${chivo.variable} ${muli.variable}`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
