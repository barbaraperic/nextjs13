import LinkPrimary from "@/app/components/LinkPrimary";
import { Heading3 } from "@/app/components/texts/Texts";
import db from "@/utils/db";
import CollectionList from "./collection-list";
import CollectionModal from "./collection-modal";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

const getData = async () => {
	const collection = await db.collection.findMany({});
	return collection;
};

const CollectionPage = async ({ searchParams }: Props) => {
	const showWordModal = searchParams?.wordModal;
	const data = await getData();

	console.log(data);

	return (
		<main className=" h-full flex flex-col justify-between">
			<section className="space-y-10">
				<Heading3 className="text-text-highlight">Collection of words</Heading3>
				<CollectionList collection={data}></CollectionList>
			</section>
			<LinkPrimary href={"/collection/?wordModal=true"}>
				Add a new word
			</LinkPrimary>
			{showWordModal && <CollectionModal />}
		</main>
	);
};

export default CollectionPage;
