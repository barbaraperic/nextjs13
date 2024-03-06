'use client'
import { createMindMap } from '@/utils/mindmap/api'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'
import styles from './NewCard.module.scss'

const NewMindMapCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    const map = await createMindMap()
    router.push(`/dashboard/mindmap/${map.data.id}`)
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <p>New mind map</p>
      <FiFileText />
    </div>
  )
}

export default NewMindMapCard
