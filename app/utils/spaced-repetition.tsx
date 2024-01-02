// RETURN
// {
//   n: how many times the card was reviewed successfully in a row, gets incremented by 1
//   efactor: hardest 1.3, easiest: 2.5 (default)
//   interval: when to review the card again, number of days, 0.1 will be in 24h, 0.7 in a week etc
//   data: optional
// }
//

// PARAMETERS
// previous - the last known state of the model for the given card
// evaluation - represents the information for the current review,
// 1. SCORE - how well the card was recalled during the review, 5 - you easily recalled, 3 - recalled but it was difficult, < 3 - failure to remember (2 - I could not remember, but it sparked my memory when you showed me the answer, 1- I could not remember, and when you showed the answer it was foreign)
// 2. LATENESS - how late this review is. If a review is scheduled for Wed, and you review on Thursday, the number will be 1. If you review 2h later, it would be 0.083 (2h * 1 days / 24h)

interface EvaluationType {
	score: number;
	lateness: number;
}

interface PreviousType {
	interval: number;
	n: number;
	efactor: number;
	data?: any;
}

function srsFund(previous: PreviousType, evaluation: EvaluationType) {
	// evaluation: score and lateness

	return {
		interval: 1.0,
		n: 0,
		efactor: 2.5,
	};
}
