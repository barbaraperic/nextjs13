import SubscribeForm from "./Form";

export default function SubscriptionPage() {
	return (
		<main className="relative pb-40">
			<h2 className="text-5xl py-2 text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-purple-500 to-pink-500">
				Get the word of the day in your inbox
			</h2>
			<SubscribeForm />
		</main>
	);
}
