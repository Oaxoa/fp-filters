import {and} from 'fp-booleans';
import {isGreaterThan} from './isGreaterThan.js';
import {isLowerThan} from './isLowerThan.js';

/**
 * Higher-order function. Returns a function that returns true if the number is between a min/max (excluded) range
 */
export const isBetweenExcludingBoundaries = (min: number, max: number) =>
	and(isGreaterThan(min), isLowerThan(max));
