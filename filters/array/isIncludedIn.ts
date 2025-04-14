/**
 * Higher-order function. Returns a function that checks if the argument is included in the comparison array
 */
export const isIncludedIn = (comparisonArray: unknown[]) => (arg: unknown) =>
	Boolean(comparisonArray?.includes(arg));
