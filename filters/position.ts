import { assignName } from '../utils.js';
import { not } from 'fp-booleans';

/**
 * Allows to specify a pattern that is repeated. The elements are returned based on their index matching the pattern
 */
export function pattern(mask: boolean[]): (item: unknown, index: number) => boolean;
export function pattern(...args: boolean[]): (item: unknown, index: number) => boolean;
export function pattern(
	...args: (boolean | boolean[])[]
): (item: unknown, index: number) => boolean {
	const patternMask: boolean[] = Array.isArray(args[0])
		? (args[0] as boolean[])
		: (args as boolean[]);
	return (item: unknown, index: number) => patternMask[index % patternMask.length];
}

/**
 * Returns elements with an even index
 */
export const isEvenIndex = pattern(true, false);
assignName(isEvenIndex, 'isEvenIndex');

/**
 * Returns elements with an odd index
 */
export const isOddIndex = not(isEvenIndex);

/**
 * Returns an element every N (offset optional)
 */
export const isNthIndex = (n: number, start: number = 0) => {
	const p = Array(n).fill(false);
	p[start % n] = true;
	return pattern(...p);
};
