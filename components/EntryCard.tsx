'use client'
import { useRouter } from 'next/navigation'
import styles from './EntryCard.module.scss'

const EntryCard = ({ data }: { data: any }) => {
  const date = new Date(data.createdAt).toDateString()
  const router = useRouter()

  function handleClick() {
    router.push(`/dashboard/collection/${data.id}`)
  }

  function truncateString(string: string) {
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
        <p className={styles.text}>{truncateString(data.content)}</p>
      </div>
    </div>
  )
}

export default EntryCard
