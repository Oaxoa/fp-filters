import { not } from 'fp-booleans';

/**
 * Argument is present in an array
 */
export const isIncludedIn = (comparisonArray: unknown[]) => (arg: unknown) => comparisonArray.includes(arg);

/**
 * Argument is not present in an array
 */
export const isNotIncludedIn = not(isIncludedIn);
