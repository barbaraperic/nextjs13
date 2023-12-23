"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/Button";
import SpacerComponent from "../components/Spacer";
import { EmptyFormDataType } from "../types/types";
import { useRouter } from "next/navigation";

const emptyFormData = {
	email: "",
	password: "",
} as EmptyFormDataType;

const emptyTouchedData = {
	email: false,
	password: false,
};

const STATUS = {
	IDLE: "IDLE",
	SUBMITTED: "SUBMITTED",
	SUBMITTING: "SUBMITTING",
	COMPLETED: "COMPLETED",
};

export default function AuthForm() {
	const [formData, setFormData] = useState(emptyFormData);
	const [status, setStatus] = useState(STATUS.IDLE);
	const [saveError, setSaveError] = useState(null);
	const [touched, setTouched] = useState(emptyTouchedData);

	// derived state
	const errors = getErrors(formData);
	const isValid = Object.keys(errors).length === 0;

	const router = useRouter();

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement;
		setFormData((currData) => {
			return {
				...currData,
				[target.id]: target.value,
			};
		});
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setStatus(STATUS.SUBMITTING);
		if (isValid) {
			try {
				setStatus(STATUS.COMPLETED);
			} catch (e: any) {
				setSaveError(e);
			}
		} else {
			setStatus(STATUS.SUBMITTED);
		}
	}

	function getErrors(formData: EmptyFormDataType) {
		const result = {} as any;
		if (!formData.email) result.email = "Email is required";
		if (!formData.password) result.password = "Password is required";
		return result;
	}

	function handleBlur(e: ChangeEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement;

		setTouched((curr) => {
			return {
				...curr,
				[target.id]: true,
			};
		});
	}

	if (saveError) throw saveError;
	// if (STATUS.COMPLETED) {
	// 	router.push("/dashboard");
	// }

	console.log("status", status);
	console.log("status2", Object.keys(touched).length !== 0 && touched.email);

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full">
				<label htmlFor="" className="flex flex-col space-y-1">
					<span>Your email</span>
					<input
						id="email"
						type="email"
						className="border p-2 border-dark"
						onChange={handleChange}
						onBlur={handleBlur}
						value={formData.email}
					/>
					<p role="alert" className="text-rose-800 h-5">
						{(touched.email || status === STATUS.SUBMITTED) && errors.email}
					</p>
				</label>
				<label htmlFor="" className="flex flex-col space-y-1">
					<span>Your password</span>
					<input
						id="password"
						type="password"
						className="border p-2 border-dark"
						onChange={handleChange}
						onBlur={handleBlur}
						value={formData.password}
					/>
					<p role="alert" className="text-rose-800 h-5">
						{(touched.password || status === STATUS.SUBMITTED) &&
							errors.password}
					</p>
				</label>
				<SpacerComponent size="small"></SpacerComponent>
				<Button intent="secondary">Submit</Button>
			</form>
		</>
	);
}
