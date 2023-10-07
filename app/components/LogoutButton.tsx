"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();

	async function handleLogout() {
		const supabse = createClientComponentClient();
		const { error } = await supabse.auth.signOut();

		if (!error) {
			router.push("/login");
		}

		if (error) {
			console.error(error);
		}
	}
	return <button onClick={handleLogout}>Logout</button>;
}
