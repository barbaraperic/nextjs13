"use client";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SpacerComponent } from "@/app/components/Spacer";

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
		<main className=" flex items-center justify-center">
			<div className="relative border-4 items-center justify-center min-h-[500px] min-w-[400px] rounded-tr-3xl shadow-[5px_5px_1px_rgb(0,0,0)] border-black flex flex-col pt-6 px-4 pb-4">
				<div className="absolute top-[-33px] left-[-80px] h-20 bg-white w-60 text-center">
					<h2 className="font-script text-7xl ">Sign Up</h2>
				</div>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
				<p className="mt-10">
					Already have an account? <Link href="/login">Login</Link>
				</p>
			</div>
		</main>
	);
}
