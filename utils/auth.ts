import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/utils/db'
import { error } from 'console'
import { getServerSession } from 'next-auth/next'

export const getUserId = async () => {
  const session = await getServerSession(authOptions)

  const prismaUser = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
  })

  if (!prismaUser) {
    throw error
  }

  return prismaUser
}
