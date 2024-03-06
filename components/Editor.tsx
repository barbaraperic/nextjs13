'use client'
import { updateEntry } from '@/utils/entry/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { useRouter } from 'next/navigation'

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
      <div className="h-5">
        {loading && <span className="loading loading-dots loading-md"></span>}
      </div>
      <div className="w-full h-[80%]">
        <textarea
          className="w-full outline-none text-xl h-full bg-neutral py-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default Editor
