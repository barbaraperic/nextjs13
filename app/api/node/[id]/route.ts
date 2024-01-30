import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (req: Request) => {
  const { node } = await req.json()

  const newNode = await prisma.node.update({
    where: {
      id: node.id,
    },
    data: {
      name: node.data.name,
      speechPart: node.data.speechPart,
      positionX: node.position.x,
      positionY: node.position.y,
    },
  })

  console.log('new node', newNode)

  return NextResponse.json({ data: newNode })
}
