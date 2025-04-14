import {and} from 'fp-booleans';
import {hasLengthMin} from './hasLengthMin.js';
import {hasLengthMax} from './hasLengthMax.js';

/**
 * Higher-order function that returns a function to check if an argument has a length property with a value between min and max (inclusive).
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is between min and max.
 */
export const hasLengthBetween = (min: number, max: number) => and(hasLengthMin(min), hasLengthMax(max));
