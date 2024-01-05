"use client";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

export default function CollectionModalCloseButton() {
	const router = useRouter();

	function handleClose() {
		router.replace("/collection");
	}

	return (
		<button
			className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
			onClick={handleClose}>
			<FiX className="h-6 w-6" />
		</button>
	);
}
