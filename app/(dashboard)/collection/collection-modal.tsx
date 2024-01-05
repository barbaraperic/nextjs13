import SpacerComponent from "@/app/components/spacer";
import { newCollection } from "@/utils/actions";
import CollectionModalCloseButton from "./collection-modal-close";
import Modal from "@/app/components/modal";

export default function CollectionModal() {
	return (
		<Modal title="Add new word">
			<div className="flex flex-1 flex-col items-center justify-center space-y-6">
				<form
					action={newCollection}
					className="flex flex-col space-y-4 items-center">
					<label className="w-full">
						<span>Front text</span>
						<fieldset className="relative">
							<input
								name="front-text"
								className="border-0 focus:after:scale-x-100 peer outline-none w-14 text-lg transition-padding duration-300 delay-200 ease-in-out"
								required={true}
								type="text"
							/>
							<div className="peer-focus:scale-x-100 h-1 rounded-3xl absolute bg-orange-600 w-full after:content-[' '] after:absolute after:w-full after:h-1 after:scale-x-0 transition-transform bg-yellow-700"></div>
						</fieldset>
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
		</Modal>
	);
}
