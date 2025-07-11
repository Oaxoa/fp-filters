import { and, not, or } from 'fp-booleans';
import { isMultipleOf } from '../number/isMultipleOf.js';

/**
 * Returns true if the argument is a date that is in a leap year.
 */
export const isLeapYear = (date: Date) =>
	or(and(isMultipleOf(4), not(isMultipleOf(100))), isMultipleOf(400))(date.getFullYear());
