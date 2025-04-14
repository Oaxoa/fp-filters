import {daysOfTheWeek, TDaysOfTheWeek} from './types.js';

/**
 * Higher-order function. Returns a predicate that compares a date with a day of the week.
 */
export const isDayOfTheWeek = (day: TDaysOfTheWeek) => (date: Date) => daysOfTheWeek[date.getDay()] === day;
