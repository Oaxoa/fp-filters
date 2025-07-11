import { and } from 'fp-booleans';
import { isPastOrSameDate } from './isPastOrSameDate.js';
import { isSameYear } from './isSameYear.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that is in the same year and is in the past or the same date.
 *
 * @param comparisonDate - The date to compare to.
 * @returns A function that takes a date and returns true if it is the same year and in the past or the same date as the comparison date.
 */
export const isSameYearToDate = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isPastOrSameDate(comparisonDate));
