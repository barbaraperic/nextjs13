import { getUserId } from '@/app/utils/auth'
import { Paragraph } from '@/components/texts/texts'
import { prisma } from '@/utils/db'

export const getEntry = async (id: string) => {
  const user = await getUserId()
  const entry = prisma.entry.findUnique({
    where: {
      userId: user.id,
      id,
    },
  })

  return entry
}

export default async function EntryPage({ params }) {
  const entry = await getEntry(params.id)

  console.log(entry)
  return <Paragraph>{entry?.content}</Paragraph>
}
