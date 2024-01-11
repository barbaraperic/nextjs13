'use client'
import { useRouter } from 'next/navigation'

const EntryCard = () => {
  const router = useRouter()
  function handleClick() {
    // create a new entry
    //router.push(`/collection/${id}`)
  }

  return (
    <div className="card w-96 glass" onClick={handleClick}>
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-action text-center">Create a new entry</h2>
      </div>
    </div>
  )
}

export default EntryCard
