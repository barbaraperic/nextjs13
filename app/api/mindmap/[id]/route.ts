import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const revalidated = true

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

  //update([`/dashboard/mindmap/${id}`])

  return NextResponse.json({ data: newNode, revalidated })
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

  if (nodeEdgeList.length > 0) {
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

    nodeEdgeList.forEach(async (edge) => {
      await prisma.nodeEdge.deleteMany({
        where: {
          NOT: {
            id: edge.id,
          },
        },
      })
    })
  }

  return NextResponse.json({ data: { newNode } })
}

export const DELETE = async (req: Request, { params }) => {
  const user = await getUserId()
  const nodeList = await prisma.nodeList.delete({
    where: {
      id: params.id,
      userId: user.id,
    },
  })

  return NextResponse.json({ data: nodeList, revalidated })
}
