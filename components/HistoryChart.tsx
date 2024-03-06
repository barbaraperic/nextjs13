'use client'
import {
  AreaChart,
  Legend,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import useSWR from 'swr'

const HistoryChart = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data: entries, error, isLoading } = useSWR('/api/entry', fetcher)

  if (isLoading) {
    return <span className="loading loading-dots loading-lg"></span>
  }

  if (error) {
    return <span>Something went wrong</span>
  }

  if (entries.data.length === 0) {
    return <p>You have no entries</p>
  }

  const model = entries.data.map((entry) => {
    const entryModel = {
      date: new Date(entry?.createdAt).toDateString(),
      wordCount: entry.content.length,
    }
    return entryModel
  })

  return (
    <>
      <div id="area-chart">
        <p className="mb-6">Number of words</p>
        <AreaChart width={700} height={400} data={model}>
          <Tooltip />
          <Area dataKey="wordCount" stroke="#bb86fc" fill="#bb86fc" />
          <CartesianGrid stroke="#666" strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#FFF" />
          <Legend />
          <YAxis stroke="#FFF" />
        </AreaChart>
      </div>
    </>
  )
}

export default HistoryChart
