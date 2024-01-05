import LinkPrimary from "@/app/components/link-primary";
import CollectionList from "./collection-list";
import CollectionModal from "./collection-modal";
import { getAllCollections } from "@/utils/actions";
import { Props } from "@/app/types/types";

const CollectionPage = async ({ searchParams }: Props) => {
	const showWordModal = searchParams?.wordModal;
	const collection = await getAllCollections();

	return (
		<main className="h-full flex flex-col justify-between">
			<section className="space-y-10 relative ">
				<CollectionList collection={collection.data}></CollectionList>
			</section>
			<LinkPrimary
				className="absolute right-10"
				href={"/collection/?wordModal=true"}>
				Add new
			</LinkPrimary>
			{showWordModal && <CollectionModal />}
		</main>
	);
};

export default CollectionPage;
