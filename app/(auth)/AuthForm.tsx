"use client";
import { FormEvent, useState } from "react";

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
			className="flex flex-col space-y-5">
			<label htmlFor="">
				<span>Email</span>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label htmlFor="">
				<span>Password</span>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<button>Submit</button>
		</form>
	);
}
