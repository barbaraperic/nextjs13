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

  const nodeList = await prisma.nodeList.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
    },
  })

  return { nodes, nodeList }
}

const MindMap = async ({ params }) => {
  const { nodes, nodeList } = await getInitNodes(params.id)

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
    <main className="flex flex-col items-end flex-1 h-full p-10 space-y-10">
      <div className="w-[400px] space-y-4">
        <Paragraph>Create node</Paragraph>
        <NewNodeForm id={params.id} />
      </div>
      <Flow id={params.id} initialNodes={initialNodes} />
    </main>
  )
}

export default MindMap
