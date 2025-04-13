import { and } from 'fp-booleans';
import { isGreaterThan } from './isGreaterThan';
import { isLowerThan } from './isLowerThan';

/**
 * Returns true if the number is between a min/max (excluded) range
 */
export const isBetweenExcludingBoundaries = (min: number, max: number) =>
	and(isGreaterThan(min), isLowerThan(max));
