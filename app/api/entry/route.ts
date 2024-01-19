import { getUserId } from '@/app/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const { content } = await request.json()

  const user = await getUserId()
  const entry = await prisma.entry.create({
    data: {
      content: 'hello',
      userId: user.id,
    },
  })

  return NextResponse.json({ data: entry })
}
