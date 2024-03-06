'use client'
import { updateEntry } from '@/utils/entry/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { useRouter } from 'next/navigation'
import styles from './Editor.module.scss'

const Editor = ({ data }: { data: any }) => {
  const [value, setValue] = useState(data.content)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setLoading(true)
      const updated = await updateEntry(data.id, value)
      router.refresh()
      setLoading(false)
    },
  })

  return (
    <>
      <div className={styles.loader}>
        {loading && <span className="loading loading-dots loading-md"></span>}
      </div>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}

export default Editor
