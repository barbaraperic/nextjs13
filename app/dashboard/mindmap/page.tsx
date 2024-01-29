import MindMapCard from '@/components/MindMapCard'
import NewMindMapCard from '@/components/NewMindMapCard'
import { Heading2 } from '@/components/texts/texts'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import React from 'react'

export const getAllNodes = async () => {
  const user = await getUserId()

  const nodeList = prisma.nodeList.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return nodeList
}

const MindMapPage = async () => {
  const allNodeLists = await getAllNodes()
  return (
    <main className="flex flex-col space-y-10 h-full p-10">
      <NewMindMapCard />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {allNodeLists.map((n) => (
          <MindMapCard key={n.id} data={n} />
        ))}
      </div>
    </main>
  )
}

export default MindMapPage
