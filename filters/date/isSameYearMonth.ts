import {and} from 'fp-booleans';
import {isSameYear} from './isSameYear.js';
import {isSameMonth} from './isSameMonth.js';

/**
 * Higher-order function. Returns a function that returns true if the argument is a date that has the same year and month as a comparison date.
 */
export const isSameYearMonth = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isSameMonth(comparisonDate));
