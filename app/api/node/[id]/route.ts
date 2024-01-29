import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (req: Request, { params }) => {
  const { updates } = await req.json()

  const node = await prisma.node.update({
    where: {
      id: params.id,
    },
    data: {
      name: updates.name,
      speechPart: updates.speechPart,
    },
  })

  return NextResponse.json({ data: node })
}
