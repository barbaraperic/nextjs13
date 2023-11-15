"use client";
import { FormEvent, useState } from "react";
import { SpacerComponent } from "../components/Spacer";

export default function SubscriptionForm() {
	const [email, setEmail] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const body = {
			api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
			email: email,
		};
		console.log("=== body Form.tsx [14] ===", body);
		// fetch("https://api.convertkit.com/v3/forms/1/subscribe", {
		// 	method: "POST",
		// 	body: JSON.stringify(body),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data));
	}

	return (
		<form
			action=""
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col w-full px-6 relative ">
			<label htmlFor="" className="flex flex-col space-y-1">
				<input
					placeholder="Your email"
					className="border font-script p-4 placeholder:uppercase border-eagle h-16 rounded-3xl bg-eagle placeholder:text-black placeholder:font-script placeholder:text-xl"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<button className="absolute w-40 uppercase text-xl font-script right-9 top-[7px] bg-sapphire text-white flex justify-center items-center rounded-3xl p-3">
				Subscribe
			</button>
		</form>
	);
}
