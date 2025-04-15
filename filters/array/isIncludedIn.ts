/**
 * Higher-order function. Returns a function that checks if the argument is included in the comparison array
 */
export const isIncludedIn =
	<T>(comparisonArray: T[]) =>
	(arg: T) =>
		Boolean(comparisonArray?.includes(arg));
