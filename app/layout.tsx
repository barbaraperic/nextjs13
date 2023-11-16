import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Work_Sans, PT_Sans_Narrow, Poppins } from "@next/font/google";
import Navbar from "./(homepage)/NavBar";
import Footer from "./(homepage)/Footer";

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const display = Work_Sans({
	variable: "--display-font",
	weight: "400",
	preload: false,
});

const body = Poppins({
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
				className={`${display.variable} ${body.variable} ${script.variable} h-auto bg-greenishYellow`}>
				{children}
			</body>
		</html>
	);
}
