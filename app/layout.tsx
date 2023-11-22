import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Mulish, PT_Sans_Narrow, Poppins } from "@next/font/google";
import Navbar from "./(homepage)/NavBar";
import Footer from "./(homepage)/Footer";

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const headings = Mulish({
	variable: "--headings-font",
	weight: "400",
	preload: false,
});

const body = Mulish({
	variable: "--body-font",
	weight: "400",
	preload: false,
});

const script = PT_Sans_Narrow({
	variable: "--script-font",
	weight: "400",
	preload: false,
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const supabase = createServerComponentClient({ cookies: () => cookieStore });
	const data = await supabase.auth.getSession();

	// if (!data.data.session) {
	// 	redirect("/login");
	// }

	return (
		<html lang="en">
			<body
				className={`${headings.variable} ${body.variable} ${script.variable}  bg-ceramic`}>
				{children}
			</body>
		</html>
	);
}
