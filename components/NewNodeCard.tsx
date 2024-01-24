'use client'
import { createMindMap, newEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'

const NewNodeCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    const map = await createMindMap()
    router.push(`/dashboard/mindmap/${map.data.id}`)
  }

  return (
    <div
      className="btn btn-lg flex border space-x-4 w-80 rounded-lg cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-xl">Create a new mind map</h2>
      </div>
      <FiFileText className="w-6 h-6" />
    </div>
  )
}

export default NewNodeCard
