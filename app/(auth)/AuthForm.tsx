"use client";
import { FormEvent, useState } from "react";
import { SpacerComponent } from "../components/Spacer";

export default function AuthForm({
	handleSubmit,
}: {
	handleSubmit: (e: FormEvent, email: string, password: string) => void;
}) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form
			action=""
			onSubmit={(e) => handleSubmit(e, email, password)}
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
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your password</span>
				<input
					className="border p-2 border-dark"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<SpacerComponent className="h-5 "></SpacerComponent>
			<button className="rounded-tr-3xl border-black border shadow-[5px_5px_1px_rgb(0,0,0)] p-3">
				Submit
			</button>
		</form>
	);
}
