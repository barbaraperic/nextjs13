"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/Button";
import SpacerComponent from "../components/Spacer";
import { EmptyFormDataType } from "../types/types";

const emptyFormData = {
	email: "",
	password: "",
} as EmptyFormDataType;

const STATUS = {
	IDLE: "IDLE",
	SUBMITTED: "SUBMITTED",
	SUBMITTING: "SUBMITTING",
	COMPLETED: "COMPLETED",
};

export default function AuthForm({
	handleSubmit,
}: {
	handleSubmit: (e: FormEvent, email: string, password: string) => void;
}) {
	const [formData, setFormData] = useState(emptyFormData);
	const [status, setStatus] = useState(STATUS.IDLE);
	const [saveError, setSaveError] = useState(null);
	const [touched, setTouched] = useState({});

	// derived state

	console.log(formData);

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const target = e.target as HTMLInputElement;
		setFormData((currData) => {
			return {
				...currData,
				[target.id]: target.value,
			};
		});
	};

	function getErrors(formData: EmptyFormDataType) {
		const result = {} as any;
		if (!formData.email) result.email = "Email is required";
		if (!formData.password) result.password = "Password is required";
	}

	return (
		<form
			// onSubmit={(e) => handleSubmit(e, email, password)}
			className="flex flex-col space-y-5 w-full">
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your email</span>
				<input
					type="email"
					className="border p-2 border-dark"
					onChange={handleChange}
					value={formData.email}
					required
				/>
			</label>
			<label htmlFor="" className="flex flex-col space-y-1">
				<span>Your password</span>
				<input
					type="password"
					className="border p-2 border-dark"
					onChange={handleChange}
					value={formData.password}
					required
				/>
			</label>
			<SpacerComponent size="small"></SpacerComponent>
			<Button intent="secondary">Submit</Button>
		</form>
	);
}
