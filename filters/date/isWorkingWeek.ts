import { or } from 'fp-booleans';
import { isDayOfTheWeek } from './isDayOfTheWeek.js';

/**
 * Returns true if the argument is a date that falls on a working week (Monday to Friday).
 */
export const isWorkingWeek = or(
	...['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(isDayOfTheWeek)
);
