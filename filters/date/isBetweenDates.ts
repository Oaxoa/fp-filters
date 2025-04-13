import { isBetween } from '../number/isBetween.js';

export const isBetweenDates = (dateBegin: Date, dateEnd: Date) => (arg: Date) =>
	isBetween(dateBegin.getTime(), dateEnd.getTime())(arg.getTime());
