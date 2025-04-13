/**
 * Argument is present in an array
 */
export const isIncludedIn = (comparisonArray: unknown[]) => (arg: unknown) =>
	Boolean(comparisonArray?.includes(arg));
