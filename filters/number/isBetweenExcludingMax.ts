import { isGreaterOrEqualTo } from './isGreaterOrEqualTo';
import { isLowerThan } from './isLowerThan';
import { and } from 'fp-booleans';

/**
 * Returns true if the number is between a min/max (excluding max) range
 */
export const isBetweenExcludingMax = (min: number, max: number) =>
	and(isGreaterOrEqualTo(min), isLowerThan(max));
