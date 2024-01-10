import "./globals.css";
import type { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Inria_Sans } from "@next/font/google";


export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const body = Inria_Sans({
	variable: "--body-font",
	weight: "400",
	preload: false,
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={` ${body.variable}`}>{children}</body>
		</html>
	);
}
