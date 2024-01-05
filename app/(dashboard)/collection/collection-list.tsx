"use client";
import Link from "next/link";
import { capitalize } from "@/app/utils/capitalize";
import { Paragraph } from "@/app/components/texts/texts";
import { CollectionType } from "@/app/types/types";

export default function CollectionList({
	collection,
}: {
	collection: CollectionType[] | undefined;
}) {
	return (
		<div className="min-h-[600px] flex flex-col space-y-6">
			<div>
				{collection?.map((c: CollectionType) => (
					<div key={c.id}>
						<Link href={`/collection/${c.id}`}>
							<div
								className={`py-5 cursor-pointer flex justify-between items-center transition-all`}>
								<Paragraph className="text-xl">
									{capitalize(c.frontText)}
								</Paragraph>
							</div>
							<div className="flex flex-col space-y-2">
								<div className="flex flex-col space-y-1">
									<span className="uppercase font-bold text-xs">
										Translation
									</span>
									<p>{capitalize(c.backText)}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
