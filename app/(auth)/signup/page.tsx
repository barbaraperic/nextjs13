"use client";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
	const [error, setError] = useState("");

	const router = useRouter();
	const handleSubmit = async (e: any, email: string, password: string) => {
		e.preventDefault();
		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/api/auth/callback`,
			},
		});

		if (error) {
			setError(error.message);
		}

		if (!error) {
			router.push("/verify");
		}
	};

	return (
		<main className="flex h-full flex-col pb-40 items-center justify-center ">
			<div className="w-5/12 space-y-10">
				<h3 className="font-script text-center">Create an account</h3>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
				<p className="mt-10 text-center">
					Already have an account?{" "}
					<Link className="text-text-highlight" href="/login">
						Login
					</Link>
				</p>
			</div>
		</main>
	);
}
