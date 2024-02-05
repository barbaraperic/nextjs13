import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const revalidated = true

export async function DELETE(req: Request, { params }) {
  const user = await getUserId()
  const nodeList = await prisma.nodeList.delete({
    where: {
      id: params.id,
      userId: user.id,
    },
  })

  return NextResponse.json({ data: nodeList, revalidated })
}
