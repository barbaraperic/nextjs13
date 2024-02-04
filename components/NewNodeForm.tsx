'use client'
import { createNode } from '@/utils/mindmap/api'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

const NewNodeForm = ({ id }) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [isTransitionStarted, startTransition] = useTransition()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const router = useRouter()

  async function handleSubmit(e: any) {
    const url = `${pathname}?${searchParams}`

    e.preventDefault()
    const newNode = await createNode(id, title, subtitle)
    startTransition(() => {
      router.push(url)
    })
    setTitle('')
    setSubtitle('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        required
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="input input-bordered text-black w-full"
      />
      <input
        required
        value={subtitle}
        type="text"
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
        className="input input-bordered text-black w-full"
      />
      <button
        disabled={!title && !subtitle}
        type="submit"
        className="btn btn-outline btn-accent"
      >
        Create
      </button>
    </form>
  )
}

export default NewNodeForm
