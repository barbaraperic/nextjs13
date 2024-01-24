import { getUserId } from '@/app/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const user = await getUserId()
  const node = await prisma.node.create({
    data: {
      name: 'Node 1',
      type: 'custom',
      function: 'verb',
      positionX: 100,
      positionY: 100,
      style: '',
      userId: user.id,
    },
  })

  return NextResponse.json({ data: node })
}
