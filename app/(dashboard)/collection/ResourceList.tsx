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
		<div className="flex flex-col w-full relative rounded-md">
			{resource?.map((item: ResourceType) => (
				<div
					key={item.id}
					className={`py-5 cursor-pointer flex justify-between items-center  transition-all last:border-0 `}>
					<a href={item.link}>
						<p className="">{item.title}</p>
					</a>
				</div>
			))}
		</div>
	);
}
