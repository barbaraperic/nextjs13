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

const HistoryChart = ({ data }) => {
  const [isSharp, setIsSharp] = useState(false)
  return (
    <div id="area-chart ">
      <Heading2 className="mb-6">Number of words</Heading2>
      <AreaChart
        width={700}
        height={400}
        data={data}
        onMouseOver={() => setIsSharp(!isSharp)}
        onMouseOut={() => setIsSharp(!isSharp)}
      >
        <Tooltip />
        <Area
          type={isSharp ? '' : 'monotone'}
          dataKey="words"
          stroke="#bb86fc"
          fill="#bb86fc"
        />

        <CartesianGrid stroke="#666" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#FFF" />
        <Legend />
        <YAxis stroke="#FFF" />
      </AreaChart>
    </div>
  )
}

export default HistoryChart
