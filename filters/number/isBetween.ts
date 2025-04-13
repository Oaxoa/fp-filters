import { and } from 'fp-booleans';
import { isGreaterOrEqualTo } from './isGreaterOrEqualTo';
import { isLowerOrEqualTo } from './isLowerOrEqualTo';

/**
 * Returns true if the number is between a min/max (included) range
 */
export const isBetween = (min: number, max: number) => and(isGreaterOrEqualTo(min), isLowerOrEqualTo(max));
