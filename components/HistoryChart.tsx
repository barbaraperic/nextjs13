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
import Loader from './Loader'

const HistoryChart = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data: entries, error, isLoading } = useSWR('/api/entry', fetcher)

  if (isLoading) {
    return <Loader />
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
    <div id="area-chart">
      <p className="mb-6">Number of words</p>
      <AreaChart width={700} height={400} data={model}>
        <Tooltip />
        <Area
          dataKey="wordCount"
          stroke="hsl(224, 98%, 26%)"
          fill="hsl(224, 98%, 26%)"
        />
        <CartesianGrid stroke="hsl(3, 93%, 60%)" strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="hsl(224, 98%, 26%)" />
        <Legend />
        <YAxis stroke="hsl(224, 98%, 26%)" />
      </AreaChart>
    </div>
  )
}

export default HistoryChart
