import CreateForm from "./CreateForm";
import WordsList from "./WordsList";

export default async function Words() {
	return (
		<main>
			<h2>Words</h2>
			<WordsList />
			<h2>Add a new word</h2>
			<div className="flex justify-center">
				<CreateForm />
			</div>
		</main>
	);
}
