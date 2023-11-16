import Link from "next/link";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default async function Collection({ searchParams }: Props) {
	const showResourceModal = searchParams?.resourceModal;
	const showWordModal = searchParams?.wordModal;

	return (
		<main className="space-y-6">
			<div className="w-40 flex space-x-6">
				<Link
					href="/collection/?wordModal=true"
					className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
					add a new word
				</Link>
				<Link
					href="/collection/?resourceModal=true"
					className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
					add a resource
				</Link>
			</div>
			<h2>Words</h2>
			<section className=" bg-gray p-6 rounded-lg">
				<div className="flex"></div>
			</section>
			<h2>Resources</h2>
			<section className=" bg-gray p-6 rounded-lg">
				<div className="flex"></div>
			</section>
		</main>
	);
}

/* import axios from "axios";
import ChatBot from "./ChatBot";

export default async function Conversations() {
	const fetchData = async (input: string) => {
		const response = await axios.post(
			"https://api.openai.com/v1/completions",
			{
				prompt: `Complete this sentence: "${input}"`,
				// model: model,
				max_tokens: 50,
				n: 1,
				stop: ".",
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
				},
			}
		);

		return response.data.choices[0].text;
	};
	return (
		<main>
			<h2>Practice</h2>
			<ChatBot />
		</main>
	);
}
 */
