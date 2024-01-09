import { CollectionType } from "@/app/types/types";

const efactorInterpretation = {
	1: 'hard' as string,
	1.5: 'medium' as string,
	2.5: 'easy' as string
}

export default function CollectionList({
	collection,
}: {
	collection: CollectionType[] | undefined;
}) {



	return (
		<div className=" max-w-[80%] border-t-2 border-r-2 grid-cols-4 text-center grid">
			<span className="table-cell font-bold uppercase">Front text</span>
			<span className="table-cell font-bold uppercase">Back text</span>
			<span className="table-cell font-bold uppercase">Difficulty</span>
			<span className="table-cell font-bold uppercase">Next review</span>
		
			{collection?.map((c: CollectionType) => 
				(
				<>
					<span className="table-cell lowercase">{c.frontText}</span>
					<span className="table-cell lowercase">{c.backText}</span>
					<span className="table-cell lowercase">{efactorInterpretation[c.efactor]}</span>
					<span className="table-cell lowercase">{c.nextReview}</span>
				</>
			))}
		</div>
	);
}
