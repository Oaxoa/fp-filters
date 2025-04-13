import { and } from 'fp-booleans';
import { isPastOrSameDate } from './isPastOrSameDate';
import { isSameYear } from './isSameYear';

export const isSameYearToDate = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isPastOrSameDate(comparisonDate));
