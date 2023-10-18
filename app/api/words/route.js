import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request) {
	const word = await request.json();

	// get supabase instance
	const supabase = createRouteHandlerClient({ cookies });

	// get current user session
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// insert the data
	const { data, error } = await supabase
		.from("words")
		.insert({
			...word,
		})
		.select()
		.single();

	return NextResponse.json({ data, error });
}
