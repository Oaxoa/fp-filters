import {and} from 'fp-booleans';
import {isGreaterOrEqualTo} from './isGreaterOrEqualTo.js';
import {isLowerOrEqualTo} from './isLowerOrEqualTo.js';

/**
 * Higher-order function. Returns a function that returns true if the number is between a min/max (included) range
 */
export const isBetween = (min: number, max: number) => and(isGreaterOrEqualTo(min), isLowerOrEqualTo(max));
