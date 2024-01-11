import CollectionList from './collection-list'
import CollectionModal from './collection-modal'
// import { getAllCollections } from '@/utils/actions'
import { Props } from '@/app/types/types'
import SpacerComponent from '@/app/components/Spacer'
import Link from 'next/link'
import EntryCard from '@/app/components/EntryCard'

const CollectionPage = async ({ searchParams }: Props) => {
  const showWordModal = searchParams?.wordModal
  // const collection = await getAllCollections();

  return (
    <div className="flex  text-white justify-center items-center h-full">
      <EntryCard />
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
