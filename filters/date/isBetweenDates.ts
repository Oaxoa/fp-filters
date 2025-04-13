import { isBetween } from '../number/isBetween';

export const isBetweenDates = (dateBegin: Date, dateEnd: Date) => (arg: Date) =>
	isBetween(dateBegin.getTime(), dateEnd.getTime())(arg.getTime());
