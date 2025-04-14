import {compareDates} from './compareDates.js';
import {isGreaterThan} from '../number/isGreaterThan.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that is in the future compared to a comparison date.
 * E.g.:
 * ```js
 * dates.filter(isFutureDate(new Date('2023-10-01')));
 * ```
 */
export const isFutureDate = compareDates(isGreaterThan);
