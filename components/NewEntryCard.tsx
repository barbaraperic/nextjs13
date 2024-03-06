'use client'
import { newEntry } from '@/utils/entry/api'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'
import styles from './NewEntryCard.module.scss'

const NewEntryCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    const entry = await newEntry()
    router.push(`/dashboard/collection/${entry.data.id}`)
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <p>Create a new entry</p>
      <FiFileText />
    </div>
  )
}

export default NewEntryCard
