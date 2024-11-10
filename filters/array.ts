import { not } from 'fp-booleans';

/**
 * Argument is present in an array
 */
export const isIncludedIn = (comparisonArray: unknown[]) => (arg: unknown) =>
	Boolean(comparisonArray?.includes(arg));

/**
 * Argument is not present in an array
 */
export const isNotIncludedIn = not(isIncludedIn);

export const filterElements =
	(condition: (item: any) => boolean) =>
	(array: any[]): boolean =>
		array.every(condition);
