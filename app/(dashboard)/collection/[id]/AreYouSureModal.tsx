"use client";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import LinkPrimary from "@/app/components/LinkPrimary";
import ExitIconComponent from "@/app/components/icons/exitIcon";
import { Heading3 } from "@/app/components/texts/Texts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AreYouSureModal({ id }: { id: string }) {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");
	const [tag, setTag] = useState("");
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
			<div className="w-[600px] relative bg-background-main min-h-[460px] flex flex-col items-center justify-between border-2 p-3 rounded-lg pb-5">
				<button
					className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
					onClick={handleClose}>
					<ExitIconComponent className="h-6"></ExitIconComponent>
				</button>
				<Heading3 className="mt-10">Are you sure?</Heading3>
				<div className="flex flex-1 justify-center items-center space-x-4">
					<ButtonPrimary onClick={handleSubmit}>
						<span>Yes</span>
					</ButtonPrimary>
					<LinkPrimary href="/collection">No</LinkPrimary>
				</div>
			</div>
		</div>
	);
}
