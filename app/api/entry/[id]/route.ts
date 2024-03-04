import revalidateDashboard from '@/utils/actions'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request, { params }) {
  const { updates } = await request.json()
  const user = await getUserId()
  const entry = await prisma.entry.update({
    where: {
      id: params.id,
      userId: user.id,
    },
    data: {
      content: updates,
    },
  })

  return NextResponse.json({ data: entry })
}

export async function DELETE(request: Request, { params }) {
  const user = await getUserId()
  const entry = await prisma.entry.delete({
    where: {
      id: params.id,
      userId: user.id,
    },
  })

  revalidateDashboard()

  return NextResponse.json({ data: entry })
}
