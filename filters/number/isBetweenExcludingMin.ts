import { isGreaterThan } from './isGreaterThan';
import { and } from 'fp-booleans';
import { isLowerOrEqualTo } from './isLowerOrEqualTo';

/**
 * Returns true if the number is between a min/max (excluding min) range
 */
export const isBetweenExcludingMin = (min: number, max: number) =>
	and(isGreaterThan(min), isLowerOrEqualTo(max));
