import { or } from 'fp-booleans';
import { isDayOfTheWeek } from './isDayOfTheWeek';

export const isWeekend = or(...['Saturday', 'Sunday'].map(isDayOfTheWeek));
