import { prisma } from '@/utils/db'
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

// export const PATCH = async (req: Request, { params }) => {
//   const { nodeList } = await req.json()

//   const newNode = nodeList.forEach(async (node) => {
//     const updated = await prisma.node.update({
//       where: {
//         id: node.id,
//       },
//       data: {
//         title: node.data.title,
//         subtitle: node.data.subtitle,
//         positionX: node.position.x,
//         positionY: node.position.y,
//       },
//     })
//     return updated
//   })

//   return NextResponse.json({ data: { newNode } })
// }

export const PATCH = async (req: Request, { params }) => {
  const { nodeList } = await req.json()

  const existingRecords = await prisma.node.findMany({
    where: {
      nodeListId: params.id,
    },
  })

  const nodeIds = nodeList.map((edge) => edge.id)

  const recordsToCreate = nodeList.filter((edge) => {
    existingRecords.some((record) => record.id !== edge.id)
  })

  const recordsToDelete = existingRecords.filter(
    (existing) => !nodeIds.includes(existing.id)
  )

  if (recordsToCreate.length > 0) {
    const newNode = await prisma.node.create({
      data: recordsToCreate,
    })
  }

  const deleteNode = await prisma.node.deleteMany({
    where: {
      id: {
        in: recordsToDelete.map((record) => record.id),
      },
    },
  })

  return NextResponse.json({ status: 200 })
}
