export interface TaskType {
	id: number;
	date: string;
	task: string;
}

export interface CollectionType {
	id: string;
	createdAt: Date;
	frontText: string;
	backText: string;
	interval: number;
	efactor: number;
	nextReview: string;
}

// FORM
export interface EmptyFormDataType {
	email: string;
	password: string;
}

export type Props = {
	searchParams: Record<string, string> | null | undefined;
};
