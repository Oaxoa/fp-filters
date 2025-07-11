import { isSame } from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same hour as a comparison date.
 */
export const isSameHours = isSame('hours');
