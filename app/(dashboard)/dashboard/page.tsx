import { Heading3 } from "@/app/components/texts/Texts";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default async function Dasboard({ searchParams }: Props) {
	return (
		<main className="flex-1 space-y-6">
			<section className="relative mb-6 rounded-lg space-y-10">
				<Heading3 className="text-text-highlight">Flashcards</Heading3>
			</section>
			{/* <section className="relative mb-6 rounded-lg ">
				<Article searchParams={searchParams} />
			</section> */}
		</main>
	);
}
