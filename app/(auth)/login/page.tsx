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
		<main className=" flex items-center justify-center">
			<div className="relative border-4 items-center justify-center min-h-[500px] min-w-[400px] rounded-tr-3xl shadow-[5px_5px_1px_rgb(0,0,0)] border-black flex flex-col pt-6 px-4 pb-4">
				<div className="absolute top-[-33px] left-[-80px] h-20 bg-white w-44 text-center">
					<h2 className="font-script text-7xl ">Login</h2>
				</div>
				<AuthForm handleSubmit={handleSubmit} />
				{error && <p>{error}</p>}
				<p className="mt-10">
					Don&apos;t have an account? <Link href="/signup">Sign up</Link>
				</p>
			</div>
		</main>
	);
}
