import { and } from 'fp-booleans';
import { isSameYearMonthDayHours } from './isSameYearMonthDayHours.js';
import { isSameMinutes } from './isSameMinutes.js';

export const isSameYearMonthDayHoursMinutes = (comparisonDate: Date) =>
	and(isSameYearMonthDayHours(comparisonDate), isSameMinutes(comparisonDate));
