import { and, not, or } from 'fp-booleans';
import { isMultipleOf } from '../number/isMultipleOf';

export const isLeapYear = (date: Date) =>
	or(and(isMultipleOf(4), not(isMultipleOf(100))), isMultipleOf(400))(date.getFullYear());
