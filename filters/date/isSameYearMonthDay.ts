import { and } from 'fp-booleans';
import { isSameYearMonth } from './isSameYearMonth';
import { isSameDay } from './isSameDay';

export const isSameYearMonthDay = (comparisonDate: Date) =>
	and(isSameYearMonth(comparisonDate), isSameDay(comparisonDate));
