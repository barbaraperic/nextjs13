import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const revalidated = false

export const POST = async (req: Request, { params }) => {
  const { source, target, id } = await req.json()

  const newNodeEdge = await prisma.nodeEdge.create({
    data: {
      target,
      source,
      id,
      nodeListId: params.id,
    },
  })

  return NextResponse.json({ data: newNodeEdge, revalidated })
}

export const PATCH = async (req: Request, { params }) => {
  const { nodeEdgeList } = await req.json()

  const existingRecords = await prisma.nodeEdge.findMany({
    where: {
      nodeListId: params.id,
    },
  })

  const nodeEdgeIds = nodeEdgeList.map((edge) => edge.id)

  const recordsToCreate = nodeEdgeList.filter(
    (edge) => !existingRecords.some((record) => record.id === edge.id)
  )

  const recordsToDelete = existingRecords.filter(
    (existing) => !nodeEdgeIds.includes(existing.id)
  )

  if (recordsToCreate.length > 0) {
    for (const record of recordsToCreate) {
      await prisma.nodeEdge.createMany({
        data: {
          target: record.target,
          source: record.source,
          id: record.id,
          nodeListId: params.id,
        },
      })
    }
  }

  const deletedNodeEdge = await prisma.nodeEdge.deleteMany({
    where: {
      id: {
        in: recordsToDelete.map((record) => record.id),
      },
    },
  })

  return NextResponse.json({ status: 200 })
}
