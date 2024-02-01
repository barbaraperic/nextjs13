import DeleteMindMapButton from '@/components/DeleteMindMapButton'
import Flow from '@/components/Flow'
import MindMapCard from '@/components/MindMapCard'
import NewNodeForm from '@/components/NewNodeForm'
import { Paragraph } from '@/components/texts/texts'
import { prisma } from '@/utils/db'
import React from 'react'

const getInitNodes = async (id: string) => {
  const nodes = await prisma.node.findMany({
    where: {
      nodeListId: id,
    },
  })

  const nodeEdges = await prisma.nodeEdge.findMany({
    where: {
      nodeListId: id,
    },
  })

  return { nodes, nodeEdges }
}

const MindMap = async ({ params }) => {
  const { nodes, nodeEdges } = await getInitNodes(params.id)

  const initialNodes = nodes.map((node) => {
    const nodeModel = {
      id: node.id,
      type: 'custom',
      data: {
        title: node.title,
        subtitle: node.subtitle,
      },
      position: {
        x: node.positionX,
        y: node.positionY,
      },
    }
    return nodeModel
  })

  return (
    <main className="grid grid-cols-[25%_75%] h-full p-10 relative">
      <div className="absolute top-2 right-6">
        <DeleteMindMapButton id={params.id} />
      </div>
      <div className="w-[260px]  space-y-4 flex flex-col justify-center">
        <Paragraph>Create node</Paragraph>
        <NewNodeForm id={params.id} />
      </div>
      <div className="flex-1">
        <Flow
          id={params.id}
          initialNodes={initialNodes}
          nodeEdges={nodeEdges}
        />
      </div>
    </main>
  )
}

export default MindMap
