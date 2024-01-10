import LinkPrimary from '@/app/components/link-primary'
import CollectionList from './collection-list'
import CollectionModal from './collection-modal'
// import { getAllCollections } from '@/utils/actions'
import { Props } from '@/app/types/types'
import SpacerComponent from '@/app/components/spacer'
import Link from 'next/link'

const CollectionPage = async ({ searchParams }: Props) => {
  const showWordModal = searchParams?.wordModal
  // const collection = await getAllCollections();

  return (
    <div className="flex  text-white justify-center items-center h-full">
      {/* <section>
				<CollectionList collection={collection.data}></CollectionList>
			</section>  */}
      <Link
        className="m-auto btn btn-wide text-lg"
        href={'/collection/?wordModal=true'}
      >
        Add new word
      </Link>
      {showWordModal && <CollectionModal />}
    </div>
  )
}

export default CollectionPage
