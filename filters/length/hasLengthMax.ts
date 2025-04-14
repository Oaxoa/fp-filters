import {THasLengthProperty} from './types.js';

/**
 * Higher-order function that returns a function to check if an argument has a length property with a value lesser than or equal to a specified length.
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is lesser than or equal to the specified length.
 */
export const hasLengthMax = (len: number) => (arg: THasLengthProperty) => arg?.length <= len;
