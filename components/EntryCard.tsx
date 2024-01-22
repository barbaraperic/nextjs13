'use client'
import { useRouter } from 'next/navigation'

const EntryCard = ({ data }) => {
  const date = new Date(data.createdAt).toDateString()
  const router = useRouter()

  function handleClick() {
    router.push(`/dashboard/collection/${data.id}`)
  }

  function truncateString(string) {
    if (string.length > 40) {
      return string.slice(0, 40) + '...'
    } else {
      return string
    }
  }

  return (
    <div
      onClick={handleClick}
      className="border p-4 rounded-lg btn-outline btn-accent cursor-pointer"
    >
      <div className="flex flex-col">
        <p className="text-left text-xl font-bold">{date}</p>
        <p className="text-left text-xl">{truncateString(data.content)}</p>
      </div>
    </div>
  )
}

export default EntryCard
