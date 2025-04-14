import {isSame} from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same month as a comparison date.
 */
export const isSameMonth = isSame('month');
