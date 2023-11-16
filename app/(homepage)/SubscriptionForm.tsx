"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SubscriptionForm() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setIsLoading(true);

		const newSubscription = {
			email,
		};

		const res = await fetch("http://localhost:3000/api/subscription", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newSubscription),
		});

		const json = await res.json();

		if (json.error) {
			console.log(json.error);
		}

		if (json.data) {
			router.refresh();
			router.push("/");
		}
	}

	return (
		<form
			action=""
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col w-full px-6 relative ">
			<label htmlFor="" className="flex flex-col space-y-1">
				<input
					placeholder="Your email"
					className="border outline-none  font-script p-4 placeholder:uppercase border-eagle h-16 rounded-md bg-eagle placeholder:text-black placeholder:font-script placeholder:text-xl text-xl"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<button
				type="submit"
				className="absolute w-40 uppercase text-xl font-script right-8 top-[6px] bg-sapphire text-white flex justify-center items-center rounded-xl p-3">
				Subscribe
			</button>
		</form>
	);
}
