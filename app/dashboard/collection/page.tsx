import { getUserId } from '@/app/utils/auth'
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { prisma } from '@/utils/db'

export const getAllEntries = async () => {
  const user = await getUserId()

  const allEntries = prisma.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allEntries
}

export default async function FlashcardPage({
  params,
}: {
  params: { id: string }
}) {
  const allEntries = await getAllEntries()
  console.log('all entryes', allEntries)
  return (
    <div className="m-auto flex items-center flex-col space-y-6 justify-center mt-4">
      <NewEntryCard />
      <div className="grid space-y-2">
        {allEntries.map((entry) => (
          <EntryCard key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  )
}
