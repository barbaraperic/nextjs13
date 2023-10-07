import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const supabase = createServerComponentClient({ cookies: () => cookieStore });
	const data = await supabase.auth.getSession();

	console.log("=== data layout.tsx [27] ===", supabase);

	return (
		<html lang="en">
			<body
				className={`${inter.className} flex h-screen bg-background-primary`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
