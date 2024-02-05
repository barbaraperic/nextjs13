import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const user = await getUserId()
  const mindMap = await prisma.nodeList.create({
    data: {
      name: 'Init',
      userId: user.id,
    },
  })

  return NextResponse.json({ data: mindMap })
}
