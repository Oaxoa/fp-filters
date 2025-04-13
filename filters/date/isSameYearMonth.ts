import { and } from 'fp-booleans';
import { isSameYear } from './isSameYear.js';
import { isSameMonth } from './isSameMonth.js';

export const isSameYearMonth = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isSameMonth(comparisonDate));
