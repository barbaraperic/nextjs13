'use client'
import { createNode } from '@/utils/api'
import { useState } from 'react'

const NewNodeForm = ({ id }) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  async function handleSubmit(e: any) {
    e.preventDefault()
    const newNode = await createNode(id, title, subtitle)
    setTitle('')
    setSubtitle('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="input input-bordered text-black w-full"
      />
      <input
        value={subtitle}
        type="text"
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
        className="input input-bordered text-black w-full"
      />
      <button type="submit" className="btn btn-accent">
        Create
      </button>
    </form>
  )
}

export default NewNodeForm
