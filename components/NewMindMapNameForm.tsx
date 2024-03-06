'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateMindMap } from '@/utils/mindmap/api'

const NewMindMapNameForm = ({ id }) => {
  const [name, setName] = useState('')

  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()
    const updated = await updateMindMap(name, id)
    router.refresh()
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col space-y-4">
      <p>Mind Map Name</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input text-black input-bordered input-accent w-full max-w-xs"
      />
      <button
        disabled={!name}
        type="submit"
        className="btn btn-outline btn-accent"
      >
        Save
      </button>
    </form>
  )
}

export default NewMindMapNameForm
