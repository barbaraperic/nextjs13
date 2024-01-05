"use client";
import Button from "@/app/components/button";
import LinkPrimary from "@/app/components/link-primary";
import ExitIconComponent from "@/app/components/icons/exit-icon";
import { Heading3 } from "@/app/components/texts/texts";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AreYouSureModal({ id }: { id: string }) {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: any) {
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
			router.push("/collection");
		}
	}

	function handleClose() {
		router.replace("/collection");
	}

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="w-[600px] relative bg-snow-100 min-h-[460px] flex flex-col items-center justify-between border-2 p-3 rounded-lg pb-5">
				<button
					className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
					onClick={handleClose}>
					<ExitIconComponent className="h-6"></ExitIconComponent>
				</button>
				<Heading3 className="mt-10">Are you sure?</Heading3>
				<div className="flex flex-1 justify-center items-center space-x-4">
					<Button onClick={handleSubmit}>Yes</Button>
					<LinkPrimary href="/collection">No</LinkPrimary>
				</div>
			</div>
		</div>
	);
}
