import { getUserId } from '@/app/utils/auth'
import Flow from '@/components/Flow'
import { prisma } from '@/utils/db'
import React from 'react'

export const getNodes = async (id: string) => {
  const user = await getUserId()
  const map = prisma.node.findMany({
    where: {
      userId: user.id,
      id,
    },
  })

  return map
}

const MindMap = async ({ params }) => {
  const nodes = await getNodes(params.id)

  console.log(nodes)

  const initialNodes = nodes.map((node) => {
    const nodeModel = {
      ...node,
      id: node.id,
      type: 'custom',
      data: {
        name: node.name,
        function: node.function,
        style: node.style,
      },
      position: {
        x: node.positionX,
        y: node.positionY,
      },
    }
    return nodeModel
  })

  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="relative mb-6 rounded-lg space-y-10 flex-1 flex flex-col justify-center items-center">
        <Flow initialNodes={initialNodes} />
      </div>
    </main>
  )
}

export default MindMap
