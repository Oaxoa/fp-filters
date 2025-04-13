import { daysOfTheWeek, TDaysOfTheWeek } from './types';

export const isDayOfTheWeek = (day: TDaysOfTheWeek) => (date: Date) => daysOfTheWeek[date.getDay()] === day;
