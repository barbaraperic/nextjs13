"use client";
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
	onSend: (input: string) => void;
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
		if (event.keyDown === 13) {
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
	const [messages, setMessages] = useState<MessageProps[]>([]);
	const [loading, setLoading] = useState(false);

	const callApi = async (input: string) => {
		setLoading(true);

		const myMessage: MessageProps = {
			text: input,
			from: Creator.Me,
			key: new Date().getTime(),
		};

		setMessages([myMessage]);
		const response = await fetch("api/generate-answers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt: input }),
		}).then((response) => response.json());
		setLoading(false);

		if (response.text) {
			const botMessage: MessageProps = {
				text: response.text,
				from: Creator.Bot,
				key: new Date().getTime(),
			};
			setMessages([botMessage]);
		}
	};

	return (
		<main className="relative max-w-2xl mx-auto">
			<div className="sticky top-0 w-full pt-10 px-4">
				<ChatInput onSend={(input) => callApi(input)} disabled={loading} />
			</div>

			<div className="mt-10 px-4">
				{messages.map((m: MessageProps) => (
					<ChatMessage key={m.key} text={m.text} from={m.from} />
				))}
			</div>
		</main>
	);
}
