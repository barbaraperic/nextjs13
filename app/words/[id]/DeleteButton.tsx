"use client";
import { useState } from "react";

import EraseIconComponent from "@/app/components/icons/eraserIcon";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleClick() {
		setIsLoading(true);
		const response = await fetch(`http://localhost:3000/api/words/${id}`, {
			method: "DELETE",
		});

		const json = await response.json();

		if (json.error) {
			console.log(json.error);
			setIsLoading(false);
		}

		if (!json.error) {
			router.refresh();
			router.push("/words");
		}
	}

	return (
		<button onClick={handleClick} disabled={isLoading}>
			<EraseIconComponent className="h-10"></EraseIconComponent>
		</button>
	);
}
