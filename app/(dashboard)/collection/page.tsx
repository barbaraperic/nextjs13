import LinkPrimary from "@/app/components/link-primary";
import CollectionList from "./collection-list";
import CollectionModal from "./collection-modal";
import { getAllCollections } from "@/utils/actions";
import { Props } from "@/app/types/types";
import SpacerComponent from "@/app/components/spacer";

const CollectionPage = async ({ searchParams }: Props) => {
	const showWordModal = searchParams?.wordModal;
	const collection = await getAllCollections();

	return (
		<main className="h-full flex flex-col relative">
			<SpacerComponent size="medium"></SpacerComponent>
			<section>
				<CollectionList collection={collection.data}></CollectionList>
			</section>
			<LinkPrimary
				className="absolute left-0"
				href={"/collection/?wordModal=true"}>
				Add new word
			</LinkPrimary>
			{showWordModal && <CollectionModal />}
		</main>
	);
};

export default CollectionPage;
