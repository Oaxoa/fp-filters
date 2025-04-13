import { none } from '../misc/none.js';

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
