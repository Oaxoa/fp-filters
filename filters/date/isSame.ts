import { TDateEntity } from './types';

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
