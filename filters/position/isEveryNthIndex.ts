import { pattern } from './pattern.js';

/**
 * Returns an element every N (offset optional)
 */
export const isEveryNthIndex = (n: number, start: number = 0) => {
	const p = Array(n).fill(false);
	p[start % n] = true;
	return pattern(...p);
};
