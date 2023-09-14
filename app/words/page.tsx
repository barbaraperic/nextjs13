import CreateForm from "./CreateForm";
import WordsList from "./WordsList";

export default async function Words() {
	return (
		<main>
			<nav>
				<div>
					<h2>Words</h2>
				</div>
			</nav>
			<WordsList />
			<div className="w-3/4">
				<CreateForm />
			</div>
		</main>
	);
}
