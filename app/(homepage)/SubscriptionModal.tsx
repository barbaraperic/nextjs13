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
		console.log("===  SubscriptionModal.tsx [46] ===");
		router.replace("/");
	}

	return (
		<div className="transition delay-150 ease-in-out absolute rounded-xl left-0 right-0 top-0 bottom-0 z-10 inset-0 overflow-y-auto flex justify-center items-center bg-sapphire">
			<div className="w-full h-full relative">
				<button
					className="cursor z-10 h-7 w-7 m-4 absolute right-0 flex justify-center items-center"
					onClick={handleClose}>
					<ExitIconComponent className="h-8 text-white"></ExitIconComponent>
				</button>
				<div className="relative flex flex-col items-center justify-center space-y-6 h-full">
					<div className="relative">
						<h2 className="text-center text-white mb-8">
							sign up to receive <br></br> Portuguese word of the day
						</h2>
						{/* <div className="w-40 absolute left-[-5%]">
							<PortugueseFlagComponent />
						</div> */}
					</div>
					<div className="w-3/4">
						<SubscriptionForm></SubscriptionForm>
					</div>
				</div>
			</div>
		</div>
	);
}
