'use client'
import { FiTrash2 } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { deleteEntry } from '@/utils/entry/api'

const DeleteEntryButton = ({ id }: { id: string }) => {
  const router = useRouter()

  function handleDelete() {
    deleteEntry(id)
    router.push('/dashboard/collection')
    router.reload()
  }
  return (
    <button
      className="flex items-center hover:text-accent "
      onClick={handleDelete}
    >
      <>
        Delete Entry
        <FiTrash2 className="ml-2 w-6 h-6 cursor-pointer" />
      </>
    </button>
  )
}

export default DeleteEntryButton
