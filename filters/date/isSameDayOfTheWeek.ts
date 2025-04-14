import {isSame} from './isSame.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same day of the week as a comparison date.
 */
export const isSameDayOfTheWeek = isSame('dayOfTheWeek');
