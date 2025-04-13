import { THigherOrderPredicate } from 'fp-booleans';

export const compareDates =
	(compareFunction: THigherOrderPredicate<[number], [number]>) => (comparisonDate: Date) => (date: Date) =>
		compareFunction(comparisonDate.getTime())(date.getTime());
