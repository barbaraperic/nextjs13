import getUserId from '@/app/utils/auth'

export const POST = async (request: Request) => {
  const { content } = await request.json()

  const user = await getUserId()

  console.log('user', user)

  // const entry = await prisma.entry.create({
  //   data: {
  //     content: 'hello',
  //   },
  // })

  //return NextResponse.json({ data: entry })
}
