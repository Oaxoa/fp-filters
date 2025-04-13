import { and } from 'fp-booleans';
import { isSameYearMonth } from './isSameYearMonth.js';
import { isSameDay } from './isSameDay.js';

export const isSameYearMonthDay = (comparisonDate: Date) =>
	and(isSameYearMonth(comparisonDate), isSameDay(comparisonDate));
