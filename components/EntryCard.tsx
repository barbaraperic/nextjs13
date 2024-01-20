'use client'
import { useRouter } from 'next/navigation'

const EntryCard = ({ data }) => {
  const date = new Date(data.createdAt).toDateString()
  const router = useRouter()

  function handleClick() {
    router.push(`/dashboard/collection/${data.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="card w-60 border border-white cursor-pointer"
    >
      <div className="card-body flex flex-col justify-center">
        <p className="card-action text-center text-xl">{date}</p>
        <p className="card-action text-center text-xl">{data.content}</p>
      </div>
    </div>
  )
}

export default EntryCard
