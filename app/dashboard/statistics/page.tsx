import HistoryChart from '@/components/HistoryChart'

export default async function StatisticsPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col space-y-6 p-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <HistoryChart />
      </div>
    </div>
  )
}
