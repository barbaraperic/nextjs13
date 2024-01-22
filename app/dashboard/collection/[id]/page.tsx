import { getUserId } from '@/app/utils/auth'
import DeleteEntryButton from '@/components/DeleteEntryButton'
import Editor from '@/components/Editor'
import Modal from '@/components/Modal'
import { Paragraph } from '@/components/texts/texts'
import { prisma } from '@/utils/db'
import { FiTrash2 } from 'react-icons/fi'

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
  console.log(params)

  const date = new Date(entry?.createdAt).toDateString()

  console.log(entry)
  return (
    <div className="px-10 relative pt-4 space-y-2 h-full w-full">
      <Paragraph>{date}</Paragraph>
      <Editor data={entry} />
      <div className="absolute top-2 right-6">
        <DeleteEntryButton id={params.id} />
      </div>
    </div>
  )
}
