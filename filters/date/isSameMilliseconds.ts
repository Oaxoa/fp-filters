import { isSame } from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same milliseconds as a comparison date.
 */
export const isSameMilliseconds = isSame('milliseconds');
