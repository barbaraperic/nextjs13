'use client'
import { FiTrash2 } from 'react-icons/fi'
import { useTransition } from 'react'
import { deleteMindMap } from '@/utils/mindmap/api'
import { useRouter } from 'next/navigation'

const DeleteMindMapButton = ({ id }: { id: string }) => {
  const router = useRouter()

  function handleDelete() {
    deleteMindMap(id)
    router.push('/dashboard/mindmap')
  }

  return (
    <button
      className="flex items-center hover:text-accent "
      onClick={handleDelete}
    >
      <>
        Delete Mind Map
        <FiTrash2 className="ml-2 w-6 h-6 cursor-pointer" />
      </>
    </button>
  )
}

export default DeleteMindMapButton
