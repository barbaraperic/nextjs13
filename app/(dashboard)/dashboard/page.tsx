import { Heading3 } from "@/app/components/texts/Texts";
import Flashcards from "./flashcards";
import Graph from "./graph";

export default async function Dashboard() {
	return (
		<main className="flex flex-1 h-full">
			<section className="relative mb-6 rounded-lg space-y-10 flex-1 flex justify-center items-center">
				{/* <Heading3 className="text-text-highlight">Flashcards</Heading3> */}
				<div className="max-w-3xl">
					<Flashcards />
				</div>
			</section>
			<section className="min-w-[300px] border-l border-green-400 px-6">
				<div className="mt-14">
					<Graph />
				</div>
			</section>
		</main>
	);
}
