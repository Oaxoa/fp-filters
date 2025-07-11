import { isSame } from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same minutes as a comparison date.
 */
export const isSameMinutes = isSame('minutes');
