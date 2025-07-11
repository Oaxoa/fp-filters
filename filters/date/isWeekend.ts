import { or } from 'fp-booleans';
import { isDayOfTheWeek } from './isDayOfTheWeek.js';

/**
 * Returns true if the argument is a date that falls on a weekend (Saturday or Sunday).
 */
export const isWeekend = or(...['Saturday', 'Sunday'].map(isDayOfTheWeek));
