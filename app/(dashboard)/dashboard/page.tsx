import Word from "./Word";
import Article from "./Article";
import Button from "./Button";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default async function Dasboard({ searchParams }: Props) {
	return (
		<main className="flex-1 space-y-6">
			<Button className="animate-fade-in">Save progress</Button>
			<section className="relative mb-6 rounded-lg">
				<Word />
			</section>
			<section className="relative mb-6 rounded-lg ">
				<Article searchParams={searchParams} />
			</section>
		</main>
	);
}
