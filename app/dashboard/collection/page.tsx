// import { getAllCollections } from '@/utils/actions'
import { Props } from '@/app/types/types'
import EntryCard from '@/components/EntryCard'

const CollectionPage = async ({ searchParams }: Props) => {
  const showWordModal = searchParams?.wordModal
  // const collection = await getAllCollections();

  return (
    <div className="flex  text-white justify-center items-center h-full">
      {/* <Link
        className="m-auto btn btn-wide text-lg"
        href={'/collection/?wordModal=true'}
      >
        Add new word
      </Link> */}
    </div>
  )
}

export default CollectionPage
