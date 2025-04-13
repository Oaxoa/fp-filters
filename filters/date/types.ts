export const daysOfTheWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
] as const;
export type TDaysOfTheWeek = (typeof daysOfTheWeek)[number];

export type TDateEntity =
	| 'year'
	| 'month'
	| 'day'
	| 'dayOfTheWeek'
	| 'hours'
	| 'minutes'
	| 'seconds'
	| 'milliseconds';
