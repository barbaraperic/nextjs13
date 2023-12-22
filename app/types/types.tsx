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
	lastReviewed: Date;
	position?: string;
}

// FORM
export interface EmptyFormDataType {
	email: string;
	password: string;
}
