import { update } from '@/utils/actions'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { title, subtitle, id } = await req.json()

  const newNode = await prisma.node.create({
    data: {
      type: 'custom',
      title,
      subtitle,
      style: '',
      positionX: 100,
      positionY: 100,
      nodeListId: id,
    },
  })

  update([`/dashboard/mindmap/${id}`])

  return NextResponse.json({ data: newNode })
}

export const PATCH = async (req: Request, { params }) => {
  const { nodeList, nodeEdgeList } = await req.json()

  const newNode = nodeList.forEach(async (node) => {
    const updated = await prisma.node.update({
      where: {
        id: node.id,
      },
      data: {
        title: node.data.title,
        subtitle: node.data.subtitle,
        positionX: node.position.x,
        positionY: node.position.y,
      },
    })
    return updated
  })

  const newNodeEdge = nodeEdgeList.forEach(async (edge) => {
    const updated = await prisma.nodeEdge.create({
      data: {
        source: edge.source,
        target: edge.target,
        id: edge.id,
        nodeListId: params.id,
      },
    })
    return updated
  })

  return NextResponse.json({ data: { newNode, newNodeEdge } })
}
