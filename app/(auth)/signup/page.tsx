"use client";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heading3, Paragraph } from "@/app/components/texts/Texts";

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
				<Heading3 className="font-script text-center">
					Create an account
				</Heading3>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
				<Paragraph className="mt-10 text-center">
					Already have an account?{" "}
					<Link className="text-text-highlight" href="/login">
						Login
					</Link>
				</Paragraph>
			</div>
		</main>
	);
}
