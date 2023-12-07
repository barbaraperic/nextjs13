"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heading3 } from "../../components/texts/Texts";
import ButtonPrimary from "../../components/ButtonPrimary";
import ExitIconComponent from "../../components/icons/exitIcon";
import { SpacerComponent } from "../../components/Spacer";

export default function ResourceModal() {
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
			<div className="w-[400px] relative bg-background-card min-h-[460px] flex flex-col justify-center border-2 p-3 rounded-lg pb-5">
				<button
					className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
					onClick={handleClose}>
					<ExitIconComponent className="h-6"></ExitIconComponent>
				</button>
				<div className="flex flex-col items-center space-y-6">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-4 items-center">
						<label className="w-full">
							<span>title</span>
							<input
								className="w-full border-2 p-2"
								required
								type="text"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
							/>
						</label>
						<label className="w-full">
							<span>link</span>
							<input
								className="w-full border-2 p-2"
								required
								type="text"
								onChange={(e) => setLink(e.target.value)}
								value={link}
							/>
						</label>
						<label className="w-full">
							<span>tag</span>
							<input
								className="w-full border-2 p-2"
								required
								type="text"
								onChange={(e) => setTag(e.target.value)}
								value={tag}
							/>
						</label>
						<SpacerComponent className="h-4"></SpacerComponent>
						<ButtonPrimary
							className=" w-full"
							disabled={isLoading}
							onClick={handleSubmit}>
							{isLoading && <span>adding...</span>}
							{!isLoading && <span>add resource</span>}
						</ButtonPrimary>
					</form>
				</div>
			</div>
		</div>
	);
}
