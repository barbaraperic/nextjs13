import ConvoList from "./ConvoList";
import CreateConvoForm from "./CreateConvoForm";

export default async function Conversations() {
	return (
		<main>
			<h2>Conversations</h2>
			<ConvoList></ConvoList>
			<div className="flex justify-center">
				<CreateConvoForm></CreateConvoForm>
			</div>
		</main>
	);
}
