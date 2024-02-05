'use server'

import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const user = await getUserId()

  const allEntries = prisma.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return NextResponse.json({ data: allEntries })
}

export async function POST(req: Request) {
  const user = await getUserId()
  const entry = await prisma.entry.create({
    data: {
      content: 'TOPIC: ',
      userId: user.id,
    },
  })

  return NextResponse.json({ data: entry })
}
