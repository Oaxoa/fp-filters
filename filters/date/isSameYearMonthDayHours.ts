import { and } from 'fp-booleans';
import { isSameYearMonthDay } from './isSameYearMonthDay';
import { isSameHours } from './isSameHours';

export const isSameYearMonthDayHours = (comparisonDate: Date) =>
	and(isSameYearMonthDay(comparisonDate), isSameHours(comparisonDate));
