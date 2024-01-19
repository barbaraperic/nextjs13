import { Heading2 } from '@/components/texts/texts'
import React from 'react'

export default async function Dashboard() {
  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="relative mb-6 rounded-lg space-y-10 flex-1 flex flex-col justify-center items-center">
        {/* <Graph collection={collection.data} /> */}
        <Heading2>Statistics</Heading2>
      </div>
    </main>
  )
}
