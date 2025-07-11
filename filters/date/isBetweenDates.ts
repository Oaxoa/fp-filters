import { isFutureOrSameDate } from './isFutureOrSameDate';
import { and } from 'fp-booleans';
import { isPastOrSameDate } from './isPastOrSameDate';

/**
 * Higher-order function. Returns a function that returns true if the argument is between the two dates (inclusive).
 */
export const isBetweenDates = (dateBegin: Date, dateEnd: Date) =>
	and(isFutureOrSameDate(dateBegin), isPastOrSameDate(dateEnd));
