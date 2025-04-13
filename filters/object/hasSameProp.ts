import { isUndefined } from '../type/isUndefined.js';

/**
 * arg has the same value of the comparison object for the specified prop
 */
export const hasSameProp = (comparisonObject: object, propertyName: string) => (arg: object) => {
	if (isUndefined(comparisonObject) || isUndefined(arg)) return false;
	const argProperty = arg[propertyName as keyof typeof arg];
	const comparisonProperty = comparisonObject[propertyName as keyof typeof comparisonObject];
	return argProperty === comparisonProperty;
};
