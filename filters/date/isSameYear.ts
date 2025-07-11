import { isSame } from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same year as a comparison date.
 */
export const isSameYear = isSame('year');
