import { or } from 'fp-booleans';
import { isDayOfTheWeek } from './isDayOfTheWeek';

export const isWorkingWeek = or(
	...['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(isDayOfTheWeek)
);
