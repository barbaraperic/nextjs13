"use client";
import { useRouter } from "next/navigation";
import ExitIconComponent from "../../components/icons/exitIcon";

export default function CollectionModalCloseButton() {
	const router = useRouter();

	function handleClose() {
		router.replace("/collection");
	}

	return (
		<button
			className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
			onClick={handleClose}>
			<ExitIconComponent className="h-6"></ExitIconComponent>
		</button>
	);
}
