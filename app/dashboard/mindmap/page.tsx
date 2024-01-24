import Flow from '@/components/Flow'
import NewNodeCard from '@/components/NewNodeCard'
import { Heading2 } from '@/components/texts/texts'
import React from 'react'

const MindMapPage = async () => {
  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="relative p-10 rounded-lg space-y-10 flex-1">
        <NewNodeCard />
      </div>
    </main>
  )
}

export default MindMapPage
