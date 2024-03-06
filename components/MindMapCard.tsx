'use client'
import { useRouter } from 'next/navigation'
import styles from './CardItem.module.scss'

const MindMapCard = ({ data }) => {
  const date = new Date(data.createdAt).toDateString()
  const router = useRouter()

  function handleClick() {
    router.push(`/dashboard/mindmap/${data.id}`)
  }

  function truncateString(string) {
    if (string.length > 40) {
      return string.slice(0, 40) + '...'
    } else {
      return string
    }
  }

  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles['card-content']}>
        <p className={styles.title}>{date}</p>
        <p className={styles.text}>{truncateString(data.name)}</p>
      </div>
    </div>
  )
}

export default MindMapCard
