"use client";
import { FormEvent, useState } from "react";
import { SpacerComponent } from "../components/spacer";

export default function SubscribeForm() {
	const [email, setEmail] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const body = {
			api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
			email: email,
		};
		fetch("https://api.convertkit.com/v3/forms/1/subscribe", {
			method: "POST",
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<form
			action=""
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col space-y-5 w-full px-6 ">
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your email</span>
				<input
					className="border p-2 border-dark"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<SpacerComponent className="h-5 "></SpacerComponent>
			<button className="rounded-tr-3xl border-black border shadow-[5px_5px_1px_rgb(0,0,0)] p-3">
				Subscribe
			</button>
		</form>
	);
}
