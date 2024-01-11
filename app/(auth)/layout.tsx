import type { Metadata } from 'next'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Nanum_Brush_Script } from '@next/font/google'
import Link from 'next/link'
import SpacerComponent from '../components/Spacer'

export const metadata: Metadata = {
  title: 'Tartaruga',
  description: 'Learn Portuguese',
  icons: {
    icon: './favicon.ico',
  },
}

const script = Nanum_Brush_Script({
  variable: '--script-font',
  weight: '400',
  preload: false,
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const data = await supabase.auth.getSession()

  // if (!data.data.session) {
  // 	redirect("/login");
  // }

  return (
    <html lang="en">
      <body className={`${script.variable}`}>
        <div className="w-full space-y-6 h-full flex flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
