import WordsList from "./WordsList";

export default async function Words() {
	return (
		<main className="w-full">
			<div className="flex justify between">
				<WordsList />
			</div>
		</main>
	);
}
