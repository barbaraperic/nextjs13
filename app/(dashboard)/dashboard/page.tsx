import Word from "./Word";
import Article from "./Article";
import Button from "./Button";

export default async function Dasboard() {
	return (
		<main className="flex-1 space-y-6">
			<section className="relative mb-6 rounded-lg">
				<Word />
			</section>
			<section className="relative mb-6 rounded-lg ">
				<Article />
			</section>
			<Button className="animate-fade-in">Save finished work</Button>
		</main>
	);
}
