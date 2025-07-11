import { and } from 'fp-booleans';
import { isSameYearMonthDayHours } from './isSameYearMonthDayHours.js';
import { isSameMinutes } from './isSameMinutes.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same year, month, day, hours, and minutes as a comparison date.
 */
export const isSameYearMonthDayHoursMinutes = (comparisonDate: Date) =>
	and(isSameYearMonthDayHours(comparisonDate), isSameMinutes(comparisonDate));
