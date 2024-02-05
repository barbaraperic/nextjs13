'use server'

import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const user = await getUserId()

  const allEntries = prisma.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  revalidatePath('/dashboard/collection')

  return NextResponse.json({ data: allEntries })
}

export const POST = async (req: Request) => {
  const user = await getUserId()
  const entry = await prisma.entry.create({
    data: {
      content: 'TOPIC: ',
      userId: user.id,
    },
  })

  return NextResponse.json({ data: entry })
}
