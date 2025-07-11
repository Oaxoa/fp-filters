import { not } from 'fp-booleans';
import { hasLength } from './hasLength.js';

/**
 * Higher-order function that returns a function to check if an argument has a specific length.
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is different from the specified length.
 */
export const hasNotLength = not(hasLength);
