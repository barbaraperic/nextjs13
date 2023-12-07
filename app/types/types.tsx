export interface TaskType {
	id: number;
	date: string;
	task: string;
}

export interface WordType {
	context: string;
	createdAt: string;
	difficulty: "low" | "medium" | "hard";
	id: number;
	translation: string;
	word: string;
}
