'use client'
import { newEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'

const NewEntryCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    // create a new entry
    const entry = await newEntry()
    router.push(`/dashboard/collection/${entry.data.id}`)
  }

  return (
    <div
      className="btn btn-lg flex border space-x-4 w-80 rounded-lg cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-xl">Create a new entry</h2>
      </div>
      <FiFileText className="w-6 h-6" />
    </div>
  )
}

export default NewEntryCard
