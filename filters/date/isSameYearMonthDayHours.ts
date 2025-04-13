import { and } from 'fp-booleans';
import { isSameYearMonthDay } from './isSameYearMonthDay.js';
import { isSameHours } from './isSameHours.js';

export const isSameYearMonthDayHours = (comparisonDate: Date) =>
	and(isSameYearMonthDay(comparisonDate), isSameHours(comparisonDate));
