import { Heading3 } from '@/app/components/texts/texts'
import { getAllCollections } from '@/utils/actions'
import React from 'react'
import Graph from './graph'

export default async function Dashboard() {
  // const collection = await getAllCollections();

  // randomise collection

  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="relative mb-6 rounded-lg space-y-10 flex-1 flex flex-col justify-center items-center">
        {/* <Graph collection={collection.data} /> */}
      </div>
    </main>
  )
}
