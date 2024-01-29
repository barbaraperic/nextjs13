import { getUserId } from '@/app/utils/auth'
import { update } from '@/utils/actions'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const user = await getUserId()
  const entry = await prisma.entry.create({
    data: {
      content: 'TOPIC: ',
      userId: user.id,
    },
  })

  update(['/dashboard/collection'])

  return NextResponse.json({ data: entry })
}
