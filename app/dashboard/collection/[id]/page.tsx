import { getUserId } from '@/app/utils/auth'
import Editor from '@/components/Editor'
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

  const date = new Date(entry?.createdAt).toDateString()

  console.log(entry)
  return (
    <div className="px-10 pt-4 space-y-2  h-full w-full">
      <Paragraph>{date}</Paragraph>
      <Editor data={entry} />
    </div>
  )
}
