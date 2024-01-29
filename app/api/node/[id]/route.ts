import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { id, name, speechPart } = await req.json()

  const nodeList = await prisma.nodeList.findUnique({
    where: {
      id,
    },
  })

  if (!nodeList) {
    return NextResponse.json({ data: 'Nope' })
  }

  const node = await prisma.node.create({
    data: {
      name,
      speechPart,
      type: 'custom',
      style: '',
      positionX: 100,
      positionY: 100,
      nodeListId: id,
    },
  })

  return NextResponse.json({ data: node })
}
