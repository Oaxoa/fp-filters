import {not} from 'fp-booleans';
import {isIncludedIn} from './isIncludedIn.js';

/**
 * Higher-order function. Returns a function that checks if the argument is included in the comparison array
 * Negative of {@link isIncludedIn}
 */
export const isNotIncludedIn = not(isIncludedIn);
