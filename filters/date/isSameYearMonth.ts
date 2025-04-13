import { and } from 'fp-booleans';
import { isSameYear } from './isSameYear';
import { isSameMonth } from './isSameMonth';

export const isSameYearMonth = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isSameMonth(comparisonDate));
