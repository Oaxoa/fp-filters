import {compareDates} from './compareDates.js';
import {is} from '../misc/is.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that is the same as a comparison date.
 * E.g.:
 * ```js
 * dates.filter(isPastDate(new Date('2023-10-01')));
 * ```
 */
export const isSameDate = compareDates(is);
