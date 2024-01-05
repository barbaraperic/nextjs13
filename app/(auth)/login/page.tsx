import AuthForm from "../AuthForm";
import Link from "next/link";
import { Heading3, Paragraph } from "@/app/components/texts/texts";

const LoginPage = () => {
	return (
		<main className="flex h-full flex-col pb-40 items-center justify-center ">
			<div className="w-5/12 space-y-10">
				<Heading3 className="text-center">Sign in to your account</Heading3>
				<AuthForm />
				<Paragraph className="mt-10 text-center">
					Don&apos;t have an account? <Link href="/signup">Sign up</Link>
				</Paragraph>
			</div>
		</main>
	);
};

export default LoginPage;
