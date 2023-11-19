"use client";

import { useState } from "react";
import ButtonOutline from "./Button";

export default function Note() {
	return (
		<div className="relative w-full">
			<section className="flex relative justify-between mb-6 rounded-lg h-60">
				<textarea className="rounded-lg w-full p-6"></textarea>
				<ButtonOutline className="absolute bottom-2 right-2">
					Save
				</ButtonOutline>
			</section>
		</div>
	);
}
