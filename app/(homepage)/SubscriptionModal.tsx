"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heading3 } from "../components/texts/Texts";
import ExitIconComponent from "../components/icons/exitIcon";
import { SpacerComponent } from "../components/Spacer";
import SubscriptionForm from "./SubscriptionForm";
import PortugueseFlagComponent from "../components/icons/portugueseFlag";

export default function SubscriptionModal() {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");
	const [tag, setTag] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
		setIsLoading(true);

		const newResource = {
			title,
			link,
			tag,
		};

		const res = await fetch("http://localhost:3000/api/resource", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newResource),
		});

		const json = await res.json();

		if (json.error) {
			console.log(json.error);
		}
		if (json.data) {
			router.refresh();
			router.push("/collection");
		}
	}

	function handleClose() {
		router.replace("/collection");
	}

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="w-[400px] bg-white min-h-[580px] border-2 p-3 rounded-lg pb-5">
				<div className="relative flex flex-col items-center space-y-6">
					<button
						className="cursor h-7 w-7 absolute right-0 flex justify-center items-center"
						onClick={handleClose}>
						<ExitIconComponent className="h-6"></ExitIconComponent>
					</button>
					<div className="relative">
						<h2 className="text-center">
							sign up to receive <br></br> Portuguese word of the day
						</h2>
						<div className="w-40 absolute left-[-5%]">
							<PortugueseFlagComponent />
						</div>
					</div>
					<SubscriptionForm></SubscriptionForm>
				</div>
			</div>
		</div>
	);
}
