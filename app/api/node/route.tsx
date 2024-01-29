import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const user = await getUserId()
  const mindMap = await prisma.nodeList.create({
    data: {
      name: 'Init',
      userId: user.id,
    },
  })

  const node = await prisma.node.create({
    data: {
      name: 'Init',
      speechPart: 'Verb',
      positionX: 100,
      positionY: 100,
      type: 'custom',
      style: '',
      nodeListId: mindMap.id,
    },
  })

  return NextResponse.json({ data: mindMap })
}
