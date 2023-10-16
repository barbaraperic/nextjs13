import WordsList from "./WordsList";

export default async function Words() {
	return (
		<main className="w-full bg-gray py-6 rounded-lg">
			<div className="flex">
				<WordsList />
			</div>
		</main>
	);
}
