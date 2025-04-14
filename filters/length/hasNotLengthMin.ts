import {not} from 'fp-booleans';
import {hasLengthMin} from './hasLengthMin.js';

/**
 * Higher-order function that returns a function to check if an argument has a length property with a value not greater than or equal to a specified length.
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is not greater than or equal to the specified length.
 */
export const hasNotLengthMin = not(hasLengthMin);
