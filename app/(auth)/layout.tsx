import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Nanum_Brush_Script } from '@next/font/google'

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
