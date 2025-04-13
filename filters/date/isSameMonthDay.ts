import { and } from 'fp-booleans';
import { isSameDay } from './isSameDay';
import { isSameMonth } from './isSameMonth';

export const isSameMonthDay = (comparisonDate: Date) =>
	and(isSameMonth(comparisonDate), isSameDay(comparisonDate));
