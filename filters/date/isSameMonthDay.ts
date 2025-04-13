import { and } from 'fp-booleans';
import { isSameDay } from './isSameDay.js';
import { isSameMonth } from './isSameMonth.js';

export const isSameMonthDay = (comparisonDate: Date) =>
	and(isSameMonth(comparisonDate), isSameDay(comparisonDate));
