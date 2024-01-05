import AuthForm from "../AuthForm";
import Link from "next/link";
import { Heading3, Paragraph } from "@/app/components/texts/texts";

const SignupPage = () => {
	return (
		<main className="flex h-full flex-col pb-40 items-center justify-center ">
			<div className="w-5/12 space-y-10">
				<Heading3 className="font-script text-center">
					Create an account
				</Heading3>
				<AuthForm />
				<Paragraph className="mt-10 text-center">
					Already have an account?{" "}
					<Link className="text-green-400" href="/login">
						Login
					</Link>
				</Paragraph>
			</div>
		</main>
	);
};

export default SignupPage;
