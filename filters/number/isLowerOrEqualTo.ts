import { isGreaterThan } from './isGreaterThan.js';
import { not } from 'fp-booleans';

/**
 * Higher-order function. Returns a function that returns true if the number is lower than or equal to the comparison
 */
export const isLowerOrEqualTo = not(isGreaterThan);
