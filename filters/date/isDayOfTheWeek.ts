import { daysOfTheWeek, TDaysOfTheWeek } from './types.js';

export const isDayOfTheWeek = (day: TDaysOfTheWeek) => (date: Date) => daysOfTheWeek[date.getDay()] === day;
