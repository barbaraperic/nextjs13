// "use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ExitIconComponent from "../../components/icons/exitIcon";
import Button from "@/app/components/Button";
import SpacerComponent from "@/app/components/Spacer";
import db from "@/utils/db";
import { newCollection } from "@/utils/actions";
import CollectionModalCloseButton from "./collection-modal-close";

export default function CollectionModal() {
	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="w-[400px] flex flex-col justify-center relative min-h-[530px] border-2 p-3 rounded-lg pb-5">
				<CollectionModalCloseButton />
				<div className="flex flex-col items-center space-y-6">
					<form
						action={newCollection}
						className="flex flex-col space-y-4 items-center">
						<label className="w-full">
							<span>Front text</span>
							<input
								name="front-text"
								className="w-full border-2 p-2"
								required={true}
								type="text"
							/>
						</label>
						<label className="w-full">
							<span>Back text</span>
							<input
								name="back-text"
								className="w-full border-2 p-2"
								required={true}
								type="text"
							/>
						</label>
						<SpacerComponent size="small"></SpacerComponent>
						<button type="submit" className=" w-full">
							<span>Add word</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
