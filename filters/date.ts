import { and, not, or, THigherOrderPredicate } from 'fp-booleans';
import {
	isBetween,
	isGreaterOrEqualTo,
	isGreaterThan,
	isLowerOrEqualTo,
	isLowerThan,
	isMultipleOf,
} from './number';
import { is } from './misc';

const compareDates =
	(compareFunction: THigherOrderPredicate<[number], [number]>) => (comparisonDate: Date) => (date: Date) =>
		compareFunction(comparisonDate.getTime())(date.getTime());

export const isSameDate = compareDates(is);
export const isFutureDate = compareDates(isGreaterThan);
export const isPastDate = compareDates(isLowerThan);
export const isFutureOrSameDate = compareDates(isGreaterOrEqualTo);
export const isPastOrSameDate = compareDates(isLowerOrEqualTo);

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
export type TDaysOfTheWeek = (typeof daysOfTheWeek)[number];
export const isDayOfTheWeek = (day: TDaysOfTheWeek) => (date: Date) => daysOfTheWeek[date.getDay()] === day;

export const isSunday = isDayOfTheWeek('Sunday');
export const isMonday = isDayOfTheWeek('Monday');
export const isTuesday = isDayOfTheWeek('Tuesday');
export const isWednesday = isDayOfTheWeek('Wednesday');
export const isThursday = isDayOfTheWeek('Thursday');
export const isFriday = isDayOfTheWeek('Friday');
export const isSaturday = isDayOfTheWeek('Saturday');
export const isWeekend = or(...['Saturday', 'Sunday'].map(isDayOfTheWeek));
export const isWorkingWeek = or(
	...['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(isDayOfTheWeek)
);
export const isLeapYear = (date: Date) =>
	or(and(isMultipleOf(4), not(isMultipleOf(100))), isMultipleOf(400))(date.getFullYear());

export const isBetweenDates = (dateBegin: Date, dateEnd: Date) => (arg: Date) =>
	isBetween(dateBegin.getTime(), dateEnd.getTime())(arg.getTime());

export type TDateEntity =
	| 'year'
	| 'month'
	| 'day'
	| 'dayOfTheWeek'
	| 'hours'
	| 'minutes'
	| 'seconds'
	| 'milliseconds';
const sameEntityMethods: Record<TDateEntity, keyof Date> = {
	year: 'getFullYear',
	month: 'getMonth',
	day: 'getDate',
	dayOfTheWeek: 'getDay',
	hours: 'getHours',
	minutes: 'getMinutes',
	seconds: 'getSeconds',
	milliseconds: 'getMilliseconds',
};
export const isSame = (compareType: TDateEntity) => (comparisonDate: Date) => (date: Date) => {
	const method = sameEntityMethods[compareType];
	return (comparisonDate[method] as () => number)() === (date[method] as () => number)();
};
export const isSameYear = isSame('year');
export const isSameMonth = isSame('month');
export const isSameDay = isSame('day');
export const isSameDayOfTheWeek = isSame('dayOfTheWeek');
export const isSameHours = isSame('hours');
export const isSameMinutes = isSame('minutes');
export const isSameMilliseconds = isSame('milliseconds');

export const isSameYearToDate = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isPastOrSameDate(comparisonDate));
export const isSameYearMonth = (comparisonDate: Date) =>
	and(isSameYear(comparisonDate), isSameMonth(comparisonDate));
export const isSameMonthDay = (comparisonDate: Date) =>
	and(isSameMonth(comparisonDate), isSameDay(comparisonDate));
export const isSameYearMonthDay = (comparisonDate: Date) =>
	and(isSameYearMonth(comparisonDate), isSameDay(comparisonDate));
export const isSameHoursMinutes = (comparisonDate: Date) =>
	and(isSameHours(comparisonDate), isSameMinutes(comparisonDate));
export const isSameYearMonthDayHours = (comparisonDate: Date) =>
	and(isSameYearMonthDay(comparisonDate), isSameHours(comparisonDate));
export const isSameYearMonthDayHoursMinutes = (comparisonDate: Date) =>
	and(isSameYearMonthDayHours(comparisonDate), isSameMinutes(comparisonDate));
