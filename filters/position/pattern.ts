import { none } from '../misc/none.js';

type TReturnType = (item: unknown, index: number) => boolean;

/**
 * Higher-order function. Allows to specify a pattern that is repeated. Returns a function where the elements are returned based on their index matching the pattern.
 * The pattern can be an array or a comma-separated list of booleans.
 */
export function pattern(mask: boolean[]): TReturnType;
export function pattern(...args: boolean[]): TReturnType;
export function pattern(...args: (boolean | boolean[])[]): TReturnType {
	const firstItem = args?.[0];
	const patternMask: boolean[] = Array.isArray(firstItem) ? (firstItem as boolean[]) : (args as boolean[]);

	return patternMask?.length
		? (item: unknown, index: number) => patternMask[index % patternMask.length]
		: none;
}
