import { and } from 'fp-booleans';
import { isSameYearMonthDay } from './isSameYearMonthDay.js';
import { isSameHours } from './isSameHours.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same year, month, day, and hours as a comparison date.
 */
export const isSameYearMonthDayHours = (comparisonDate: Date) =>
	and(isSameYearMonthDay(comparisonDate), isSameHours(comparisonDate));
