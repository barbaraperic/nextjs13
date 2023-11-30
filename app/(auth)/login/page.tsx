"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SpacerComponent } from "@/app/components/Spacer";

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
		<main className="flex h-full flex-col pb-40 items-center justify-center ">
			<div className="w-5/12 space-y-10">
				<h3 className="font-script text-center">Sign in to your account</h3>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
				<p className="mt-10 text-center">
					Don&apos;t have an account? <Link href="/signup">Sign up</Link>
				</p>
			</div>
		</main>
	);
}
