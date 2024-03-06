'use client'
import { FiTrash2 } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { deleteEntry } from '@/utils/entry/api'
import styles from './DeleteEntryButton.module.scss'

const DeleteEntryButton = ({ id }: { id: string }) => {
  const router = useRouter()

  async function handleDelete() {
    const deleted = await deleteEntry(id)
    router.push('/dashboard/collection')
    router.refresh()
  }
  return (
    <button className={styles.button} onClick={handleDelete}>
      <>
        Delete Entry
        <FiTrash2 />
      </>
    </button>
  )
}

export default DeleteEntryButton
