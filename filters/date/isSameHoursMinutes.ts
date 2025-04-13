import { and } from 'fp-booleans';
import { isSameHours } from './isSameHours';
import { isSameMinutes } from './isSameMinutes';

export const isSameHoursMinutes = (comparisonDate: Date) =>
	and(isSameHours(comparisonDate), isSameMinutes(comparisonDate));
