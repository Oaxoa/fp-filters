import { not } from 'fp-booleans';

/**
 * Argument is present in an array
 */
export const isIncludedIn = (comparisonArray: unknown[]) => (arg: unknown) =>
	comparisonArray.includes(arg);
export const isNotIncludedIn = not(isIncludedIn);
