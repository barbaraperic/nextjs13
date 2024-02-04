import EntryCard from '@/components/EntryCard'
import HistoryChart from '@/components/HistoryChart'
import NewEntryCard from '@/components/NewEntryCard'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const data = [
  {
    name: '2022-04-16',
    words: 17,
  },
  {
    name: '2022-04-17',
    words: 4,
  },
  {
    name: '2022-04-18',
    words: 6,
  },
  {
    name: '2022-04-19',
    words: 4,
  },
  {
    name: '2022-04-20',
    words: 5,
  },
]

export default async function StatisticsPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col space-y-6 p-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <HistoryChart data={data} />
      </div>
    </div>
  )
}
