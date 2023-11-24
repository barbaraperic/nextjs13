import ResourceList from "./ResourceList";
import ResourceModal from "./ResourceModal";
import WordModal from "./WordModal";
import WordsList from "./WordsList";
import Link from "next/link";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default async function Collection({ searchParams }: Props) {
	const showResourceModal = searchParams?.resourceModal;
	const showWordModal = searchParams?.wordModal;

	return (
		<main className="space-y-6 h-full flex flex-col justify-between">
			<section className="space-y-4">
				<h2>Words</h2>
				<div className="shadow shadow-lighterEmmerald p-6 rounded-lg">
					<div className="flex">
						<WordsList />
					</div>
				</div>
			</section>
			<section className="space-y-4">
				<h2>Resources</h2>
				<div className="shadow shadow-lighterEmmerald p-6 rounded-lg">
					<div className="flex">
						<ResourceList />
					</div>
				</div>
			</section>
			<section className="w-40 flex space-x-6">
				<Link
					href="/collection/?wordModal=true"
					className="py-4 min-w-[260px] shadow shadow-lighterEmmerald border-deepOak border text-deepOak hover:text-sepia hover:border-sepia flex justify-center text-lg rounded-xl cursor">
					add a new word
				</Link>
				<Link
					href="/collection/?resourceModal=true"
					className="py-4 min-w-[260px] shadow shadow-lighterEmmerald border-deepOak border text-deepOak hover:text-sepia hover:border-sepia flex justify-center text-lg rounded-xl cursor">
					add a resource
				</Link>
			</section>
			{showWordModal && <WordModal />}
			{showResourceModal && <ResourceModal />}
		</main>
	);
}
