import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
// import { getAllEntries } from '@/utils/entry/api'
import { cache } from 'react'

// import { getAllEntries } from '@/utils/entry/actions'

export const dynamic = 'force-dynamic'

export const getAllEntries = cache(async () => {
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
})

export default async function CollectionPage({
  params,
}: {
  params: { id: string }
}) {
  const allEntries = await getAllEntries()

  return (
    <div className="flex flex-col space-y-6 p-10">
      <NewEntryCard />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {allEntries?.map((entry) => (
          <EntryCard key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  )
}
