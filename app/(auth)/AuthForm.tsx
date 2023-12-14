"use client";
import { FormEvent, useState } from "react";
import { SpacerComponent } from "../components/Spacer";
import Button from "../components/Button";

export default function AuthForm({
	handleSubmit,
}: {
	handleSubmit: (e: FormEvent, email: string, password: string) => void;
}) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form
			onSubmit={(e) => handleSubmit(e, email, password)}
			className="flex flex-col space-y-5 w-full">
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your email</span>
				<input
					type="email"
					className="border p-2 border-dark"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your password</span>
				<input
					type="password"
					className="border p-2 border-dark"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<SpacerComponent className="h-5 "></SpacerComponent>
			<Button intent="secondary">Submit</Button>
		</form>
	);
}
