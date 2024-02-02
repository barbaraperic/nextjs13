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

  console.log('nodeEdgeList', nodeEdgeList)

  const existingRecords = await prisma.nodeEdge.findMany({
    where: {
      nodeListId: params.id,
    },
  })

  console.log('existingRecords', existingRecords)

  const nodeEdgeIds = nodeEdgeList.map((edge) => edge.id)

  // const recordsToCreate = nodeEdgeList.filter((edge) =>
  //   existingRecords.some((record) => record.id !== edge.id)
  // )

  // if you find the element in the list return

  const recordsToCreate = nodeEdgeList.filter((edge) => {
    existingRecords.some((record) => record.id !== edge.id)
  })

  console.log('recordsToCreate', recordsToCreate)

  const recordsToDelete = existingRecords.filter(
    (existing) => !nodeEdgeIds.includes(existing.id)
  )

  if (recordsToCreate.length > 0) {
    const newNodeEdge = await prisma.nodeEdge.create({
      data: recordsToCreate,
    })
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
