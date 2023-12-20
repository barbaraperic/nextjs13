import { Heading3 } from "@/app/components/texts/Texts";
import Flashcards from "./Flashcards";

export default async function Dasboard() {
	return (
		<main className="flex-1 space-y-6">
			<section className="relative mb-6 rounded-lg space-y-10">
				<Heading3 className="text-text-highlight">Flashcards</Heading3>
				<Flashcards />
			</section>
		</main>
	);
}
