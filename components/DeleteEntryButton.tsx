'use client'
import { FiTrash2 } from 'react-icons/fi'
import { useTransition } from 'react'
import { deleteEntry } from '@/utils/api'

const DeleteEntryButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      className="flex items-center hover:text-accent "
      onClick={() => startTransition(() => deleteEntry(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          Deleting...
          <FiTrash2 className="ml-2 w-6 h-6 cursor-pointer" />
        </>
      )}
      {!isPending && (
        <>
          Delete Entry
          <FiTrash2 className="ml-2 w-6 h-6 cursor-pointer" />
        </>
      )}
    </button>
  )
}

export default DeleteEntryButton
