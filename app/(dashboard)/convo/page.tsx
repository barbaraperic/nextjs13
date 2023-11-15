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
