import LinkPrimary from "@/app/components/LinkPrimary";
import { Heading3 } from "@/app/components/texts/Texts";
import CollectionList from "./collection-list";
import CollectionModal from "./collection-modal";
import { getAllCollections } from "@/utils/actions";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

const CollectionPage = async ({ searchParams }: Props) => {
	const showWordModal = searchParams?.wordModal;
	const collection = await getAllCollections();

	return (
		<main className="h-full flex flex-col justify-between">
			<section className="space-y-10 relative p-10">
				<Heading3>Collection</Heading3>
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
