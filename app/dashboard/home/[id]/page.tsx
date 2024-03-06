import DeleteEntryButton from '@/components/DeleteEntryButton'
import Editor from '@/components/Editor'
import Modal from '@/components/Modal'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { FiTrash2 } from 'react-icons/fi'
import { deleteEntry } from '@/utils/entry/api'
import styles from './page.module.scss'

export const getEntry = async (id: string) => {
  const user = await getUserId()
  const entry = prisma.entry.findUnique({
    where: {
      userId: user.id,
      id,
    },
  })

  return entry
}

export default async function EntryPage({ params }) {
  const entry = await getEntry(params.id)

  const date = new Date(entry?.createdAt).toDateString()

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p>{date}</p>
        <DeleteEntryButton id={params.id} />
      </div>
      <Editor data={entry} />
    </div>
  )
}
