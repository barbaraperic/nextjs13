'use client'
import { useState } from 'react'
import {
  AreaChart,
  Legend,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Heading2 } from './texts/texts'
import useSWR from 'swr'
import { createURL } from '@/utils/entry/api'

const HistoryChart = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data: entries, error, isLoading } = useSWR('/api/entry', fetcher)

  if (isLoading) {
    return <span className="loading loading-dots loading-lg"></span>
  }

  if (error) {
    return <span>Something went wrong</span>
  }

  console.log(entries)

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
        <Heading2 className="mb-6">Number of words</Heading2>
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
