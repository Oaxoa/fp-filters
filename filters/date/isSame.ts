import { TDateEntity } from './types.js';

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

/**
 * Higher-order function. Returns a predicate that compares a date with another date.
 * @param compareType - The type of entity to compare (e.g., year, month, day, etc.).
 * @returns A function that takes a comparison date and returns a function that takes a date to compare.
 */
export const isSame = (compareType: TDateEntity) => (comparisonDate: Date) => (date: Date) => {
	const method = sameEntityMethods[compareType];
	return (comparisonDate[method] as () => number)() === (date[method] as () => number)();
};
