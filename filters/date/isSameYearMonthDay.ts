import { and } from 'fp-booleans';
import { isSameYearMonth } from './isSameYearMonth.js';
import { isSameDay } from './isSameDay.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same year, month, and day as a comparison date.
 */
export const isSameYearMonthDay = (comparisonDate: Date) =>
	and(isSameYearMonth(comparisonDate), isSameDay(comparisonDate));
