import { or } from 'fp-booleans';
import { isDayOfTheWeek } from './isDayOfTheWeek.js';

export const isWeekend = or(...['Saturday', 'Sunday'].map(isDayOfTheWeek));
