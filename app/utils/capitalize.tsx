export function capitalize(word: string) {
	const firstWord = word[0].toUpperCase();
	const restOfTheWord = word.substring(1).toLowerCase();
	return `${firstWord}${restOfTheWord}`;
}
