import {and} from 'fp-booleans';
import {isSameHours} from './isSameHours.js';
import {isSameMinutes} from './isSameMinutes.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same hours and minutes as a comparison date.
 */
export const isSameHoursMinutes = (comparisonDate: Date) =>
	and(isSameHours(comparisonDate), isSameMinutes(comparisonDate));
