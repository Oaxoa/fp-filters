import { and } from 'fp-booleans';
import { isSameHours } from './isSameHours.js';
import { isSameMinutes } from './isSameMinutes.js';

export const isSameHoursMinutes = (comparisonDate: Date) =>
	and(isSameHours(comparisonDate), isSameMinutes(comparisonDate));
