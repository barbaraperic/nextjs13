import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { name, speechPart, id } = await req.json()

  const newNode = await prisma.node.create({
    data: {
      type: 'custom',
      name,
      speechPart,
      style: '',
      positionX: 100,
      positionY: 100,
      nodeListId: id,
    },
  })

  return NextResponse.json({ data: newNode })
}

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

  return NextResponse.json({ data: newNode })
}
