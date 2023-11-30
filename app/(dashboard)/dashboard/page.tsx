import Word from "./Word";
import Article from "./Article";
import SaveProgressButton from "./SaveProgressButton";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default async function Dasboard({ searchParams }: Props) {
	return (
		<main className="flex-1 space-y-6">
			<SaveProgressButton className="animate-fade-in">
				Save progress
			</SaveProgressButton>
			<section className="relative mb-6 rounded-lg">
				<Word />
			</section>
			<section className="relative mb-6 rounded-lg ">
				<Article searchParams={searchParams} />
			</section>
		</main>
	);
}
