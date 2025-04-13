import { and } from 'fp-booleans';
import { isPastOrSameDate } from './isPastOrSameDate.js';
import { isSameYear } from './isSameYear.js';

export const isSameYearToDate = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isPastOrSameDate(comparisonDate));
