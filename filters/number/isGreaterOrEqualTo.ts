import {isLowerThan} from './isLowerThan.js';
import {not} from 'fp-booleans';

/**
 * Higher-order function. Returns a function that returns true if the number is greater than or equal to the comparison
 */
export const isGreaterOrEqualTo = not(isLowerThan);
