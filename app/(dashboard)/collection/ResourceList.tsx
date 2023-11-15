import React, { useEffect, useState } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export interface ResourceType {
	id: string;
	title: string;
	link: string;
}

async function getResource() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("resource").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function ResourceList() {
	const resource = await getResource();

	return (
		<div className="flex flex-col w-full relative border-dark border rounded-md">
			{resource?.map((item: ResourceType) => (
				<div
					key={item.id}
					className={`py-5 px-14 cursor-pointer flex justify-between items-center text-dark hover:bg-mediumGray transition-all  border-b last:border-0 border-dark`}>
					<a href={item.link}>
						<p className="font-script text-4xl underline">{item.title}</p>
					</a>
				</div>
			))}
			<div className="border-red border-l border-r absolute w-2 h-full left-6"></div>
		</div>
	);
}
