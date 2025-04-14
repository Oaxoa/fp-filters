import {not} from 'fp-booleans';
import {hasLengthMax} from './hasLengthMax.js';

/**
 * Higher-order function that returns a function to check if an argument has a length property with a value not between min and max (inclusive).
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is not between min and max.
 */
export const hasNotLengthBetween = not(hasLengthMax);
