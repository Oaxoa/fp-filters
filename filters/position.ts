import { assignName } from '../utils.js';
import { not } from 'fp-booleans';
import { none } from './misc';

/**
 * TODO Investigate why these functions are somehow not not-able.
 */

/**
 * Allows to specify a pattern that is repeated. The elements are returned based on their index matching the pattern
 */
export function pattern(mask: boolean[]): (item: unknown, index: number) => boolean;
export function pattern(...args: boolean[]): (item: unknown, index: number) => boolean;
export function pattern(...args: (boolean | boolean[])[]): (item: unknown, index: number) => boolean {
	const firstItem = args?.[0];
	const patternMask: boolean[] = Array.isArray(firstItem) ? (firstItem as boolean[]) : (args as boolean[]);

	return patternMask?.length
		? (item: unknown, index: number) => patternMask[index % patternMask.length]
		: none;
}

/**
 * Returns elements with an even index
 */
export const isEvenIndex = pattern(true, false);
assignName(isEvenIndex, 'isEvenIndex');

/**
 * Returns elements with an odd index
 */
export const isOddIndex = pattern(false, true);

/**
 * Returns an element every N (offset optional)
 */
export const isEveryNthIndex = (n: number, start: number = 0) => {
	const p = Array(n).fill(false);
	p[start % n] = true;
	return pattern(...p);
};
