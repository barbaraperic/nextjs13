"use client";
import AuthForm from "../AuthForm";

export default function Login() {
	const handleSubmit = async (e: any, email: string, password: string) => {
		e.preventDefault();
		console.log("=== email page.tsx [7] ===", email);
		console.log("=== email page.tsx [7] ===", password);
	};

	return (
		<main>
			<h2>Sign up</h2>
			<AuthForm handleSubmit={handleSubmit} />
		</main>
	);
}
