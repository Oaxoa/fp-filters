import { compareDates } from './compareDates.js';
import { isLowerThan } from '../number/isLowerThan.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that is in the past compared to a comparison date.
 * E.g.:
 * ```js
 * dates.filter(isPastDate(new Date('2023-10-01')));
 * ```
 */
export const isPastDate = compareDates(isLowerThan);
