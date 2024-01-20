'use client'
import { newEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    // create a new entry
    const entry = await newEntry()
    router.push(`/dashboard/collection/${entry.data.id}`)
  }

  return (
    <div
      className="card w-60 border border-white cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-action text-center text-xl">Create a new entry</h2>
      </div>
    </div>
  )
}

export default NewEntryCard
