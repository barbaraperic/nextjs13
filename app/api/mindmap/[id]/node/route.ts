import { prisma } from '@/utils/db'
import { formatNodeObject } from '@/utils/formatNodeObject'
import { NextResponse } from 'next/server'

export const revalidated = false

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

  return NextResponse.json({ data: newNode, revalidated })
}

export const PATCH = async (req: Request, { params }) => {
  const { nodeList } = await req.json()

  const existingRecords = await prisma.node.findMany({
    where: {
      nodeListId: params.id,
    },
  })

  const nodeIds = nodeList.map((node) => node.id)

  const recordsToCreate = nodeList.filter(
    (node) => !existingRecords.some((record) => record.id === node.id)
  )

  const recordsToUpdate = nodeList.filter((edge) =>
    existingRecords.some((record) => {
      if (record.id === edge.id) {
        return (
          record.title !== edge.data.title ||
          record.subtitle !== edge.data.subtitle ||
          record.positionX !== edge.position.x ||
          record.positionY !== edge.position.y
        )
      }
      return false
    })
  )

  const formatRecordsToUpdate = formatNodeObject(recordsToUpdate, params.id)
  const formatRecordsToCreate = formatNodeObject(recordsToCreate, params.id)

  const recordsToDelete = existingRecords.filter(
    (existing) => !nodeIds.includes(existing.id)
  )

  if (formatRecordsToCreate.length > 0) {
    for (const record of formatRecordsToCreate) {
      await prisma.node.updateMany({
        where: { id: record.id, nodeListId: record.nodeListId },
        data: {
          title: record.title,
          subtitle: record.subtitle,
          positionX: record.positionX,
          positionY: record.positionY,
        },
      })
    }
  }

  if (formatRecordsToUpdate.length > 0) {
    for (const record of formatRecordsToUpdate) {
      await prisma.node.updateMany({
        where: { id: record.id, nodeListId: record.nodeListId },
        data: {
          title: record.title,
          subtitle: record.subtitle,
          positionX: record.positionX,
          positionY: record.positionY,
        },
      })
    }
  }

  if (recordsToDelete.length > 0) {
    await prisma.node.deleteMany({
      where: {
        id: {
          in: recordsToDelete.map((record) => record.id),
        },
      },
    })
  }

  return NextResponse.json({ status: 200 })
}
