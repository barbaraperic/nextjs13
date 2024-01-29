import { getUserId } from '@/app/utils/auth'
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

  return nodes
}

const MindMap = async ({ params }) => {
  const initNodes = await getInitNodes(params.id)
  const initialNodes = initNodes.map((node) => {
    const nodeModel = {
      ...node,
      id: node.id,
      type: 'custom',
      data: {
        name: node.name,
        function: node.speechPart,
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
    <main className="flex flex-col flex-1 h-full p-10">
      <div className="w-[400px] space-y-4 ">
        <Paragraph>Create node</Paragraph>
        <NewNodeForm id={params.id} />
      </div>
      <div className=""></div>
      <Flow initialNodes={initialNodes} />
    </main>
  )
}

export default MindMap
