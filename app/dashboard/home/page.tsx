import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { cache } from 'react'
import styles from './page.module.scss'

export const dynamic = 'force-dynamic'

export const getAllEntries = cache(async () => {
  const user = await getUserId()

  const allEntries = await prisma.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allEntries
})

export default async function CollectionHomePage({
  params,
}: {
  params: { id: string }
}) {
  const allEntries = await getAllEntries()

  return (
    <div className={styles['page-wrapper']}>
      <NewEntryCard />
      <p>All notes</p>
      <div className={styles['cards-wrapper']}>
        {allEntries?.map((entry) => (
          <EntryCard key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  )
}
