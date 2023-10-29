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
		<main className="space-y-6">
			<div className="w-40 flex space-x-6">
				<Link
					href="/collection/?wordModal=true"
					className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
					add a new word
				</Link>
				<Link
					href="/collection/?resourceModal=true"
					className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
					add a resource
				</Link>
			</div>
			<section className="w-full bg-gray p-6 rounded-lg">
				<div className="flex">
					<WordsList />
				</div>
			</section>
			{showWordModal && <WordModal />}
			{showResourceModal && <ResourceModal />}
		</main>
	);
}
