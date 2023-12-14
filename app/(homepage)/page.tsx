import Button from "../components/Button";
import { SpacerComponent } from "../components/Spacer";
import { Heading2 } from "../components/texts/Texts";

import EggIcon from "../utils/eggIcon";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Homepage({ searchParams }: Props) {
	const showSubscriptionModal = searchParams?.subscriptionModal;

	return (
		<main className="h-full w-full grid grid-cols-2">
			<section className="relative min-h-[500px] flex justify-center items-center">
				<Heading2>Empower your language journey</Heading2>
			</section>
			<section></section>
		</main>
	);
}
