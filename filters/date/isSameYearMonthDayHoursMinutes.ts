import { and } from 'fp-booleans';
import { isSameYearMonthDayHours } from './isSameYearMonthDayHours';
import { isSameMinutes } from './isSameMinutes';

export const isSameYearMonthDayHoursMinutes = (comparisonDate: Date) =>
	and(isSameYearMonthDayHours(comparisonDate), isSameMinutes(comparisonDate));
