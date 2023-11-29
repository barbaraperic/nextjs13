export function capitalize(word: string) {
	if (!word) {
		return;
	}

	const firstWord = word[0].toUpperCase();
	const restOfTheWord = word.substring(1).toLowerCase();
	return `${firstWord}${restOfTheWord}`;
}
