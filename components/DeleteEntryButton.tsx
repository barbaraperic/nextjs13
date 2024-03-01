'use client'
import { FiTrash2 } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { deleteEntry } from '@/utils/entry/api'

const DeleteEntryButton = ({ id }: { id: string }) => {
  const router = useRouter()

  async function handleDelete() {
    const deleted = await deleteEntry(id)
    router.push('/dashboard/collection')
    router.refresh()
  }
  return (
    <button
      className="flex items-center hover:text-primary-dark "
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
