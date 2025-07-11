import { and } from 'fp-booleans';
import { isSameDay } from './isSameDay.js';
import { isSameMonth } from './isSameMonth.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same month and day as a comparison date.
 */
export const isSameMonthDay = (comparisonDate: Date) =>
	and(isSameMonth(comparisonDate), isSameDay(comparisonDate));
