/* "use client";
import { useState } from "react";

enum Creator {
	Me = 0,
	Bot = 1,
}

interface MessageProps {
	text: string;
	from: Creator;
	key: number;
}

interface InputProps {
	onSend: () => void;
	disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
	return (
		<>
			{from == Creator.Me && (
				<div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
					<p className="text-gray-700">{text}</p>
				</div>
			)}
			{from == Creator.Bot && (
				<div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
					<p className="text-gray-700">{text}</p>
				</div>
			)}
		</>
	);
};

const ChatInput = ({ onSend, disabled }: InputProps) => {
	const [input, setInput] = useState("");

	const sendInput = () => {
		onSend(input);
		setInput("");
	};

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			sendInput();
		}
	};

	return (
		<div className="bg-white border-2 p-2 rounded-lg flex justify-center">
			<input
				value={input}
				onChange={(ev: any) => setInput(ev.target.value)}
				className="w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none"
				type="text"
				placeholder="Ask me anything"
				disabled={disabled}
				onKeyDown={(ev) => handleKeyDown(ev)}
			/>
		</div>
	);
};

export default function ChatBot() {
	const [messages, setMessages] = useState("");
	const [loading, setLoading] = useState(false);

	const prompt = `Q: Generate a response with less than 200 characters.`;

	const generateResponse = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault();
		setMessages("");
		setLoading(true);

		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				prompt,
			}),
		});

		console.log("=== response ChatBot.tsx [87] ===", response);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		// This data is a ReadableStream
		const data = response.body;
		if (!data) {
			return;
		}

		const reader = data.getReader();
		const decoder = new TextDecoder();
		let done = false;

		while (!done) {
			const { value, done: doneReading } = await reader.read();
			done = doneReading;
			const chunkValue = decoder.decode(value);
			setMessages((prev) => prev + chunkValue);
		}
		setLoading(false);
	};
	return (
		<main className="relative max-w-2xl mx-auto">
			<div className="sticky top-0 w-full pt-10 px-4">
				<ChatInput
					onSend={(e: any) => generateResponse(e)}
					disabled={loading}
				/>
			</div>
			<div className="mt-10 px-4">
				 {messages.map((m: MessageProps) => (
					<ChatMessage key={m.key} text={m.text} from={m.from} />
				))} 
				{messages}
			</div>
		</main>
	);
}
 */
