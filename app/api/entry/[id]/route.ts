import { getUserId } from '@/app/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }) => {
  const user = await getUserId()
  const entry = await prisma.entry.findUnique({
    where: {
      userId: user.id,
      id: params.id,
    },
  })

  return NextResponse.json({ data: entry })
}
