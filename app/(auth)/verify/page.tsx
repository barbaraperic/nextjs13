import { Heading2, Paragraph } from "@/app/components/texts/Texts";

export default function Verify() {
	return (
		<main>
			<Heading2 className="text-center">Thanks for registering!</Heading2>
			<Paragraph>
				Before logging in, you need to verify your email address
			</Paragraph>
		</main>
	);
}
