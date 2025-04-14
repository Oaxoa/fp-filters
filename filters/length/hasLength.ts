import {THasLengthProperty} from './types.js';

/**
 * Higher-order function that returns a function to check if an argument has a specific length.
 *
 * @param len - The length to compare against.
 * @returns A function that takes an argument and returns true if the argument's length is equal to the specified length.
 */
export const hasLength = (len: number) => (arg: THasLengthProperty) => Boolean(arg?.length === len);
