"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: any, email: string, password: string) => {
		e.preventDefault();
		setError("");

		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		}

		if (!error) {
			router.push("/");
		}
	};

	return (
		<main className=" flex items-center justify-center">
			<div className="border-4 items-center justify-center min-h-[400px] min-w-[400px] rounded-tr-3xl shadow-[5px_5px_1px_rgb(0,0,0)] border-black flex flex-col pt-6 px-4 pb-4">
				<h2 className="font-script">login</h2>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
			</div>
		</main>
	);
}
