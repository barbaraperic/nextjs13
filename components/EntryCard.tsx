'use client'
import { newEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function EntryCard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  async function handleOnClick() {
    // create a new entry
    const entry = await newEntry()
    console.log(entry)
    router.push(`/dashboard/home/${entry.data.id}`)
  }

  return (
    <div className="card w-96 glass cursor-pointer" onClick={handleOnClick}>
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-action text-center">Create a new entry</h2>
      </div>
    </div>
  )
}
