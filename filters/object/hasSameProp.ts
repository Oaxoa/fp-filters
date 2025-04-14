import {isUndefined} from '../type/isUndefined.js';

/**
 * Higher-order function. Returns a function that checks if the argument has the same specified prop (name and value) as a comparison object.
 */
export const hasSameProp = (comparisonObject: object, propertyName: string) => (arg: object) => {
	if (isUndefined(comparisonObject) || isUndefined(arg)) return false;
	const argProperty = arg[propertyName as keyof typeof arg];
	const comparisonProperty = comparisonObject[propertyName as keyof typeof comparisonObject];
	return argProperty === comparisonProperty;
};
