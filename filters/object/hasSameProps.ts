import { hasSameProp } from './hasSameProp.js';

/**
 * arg has the same value of the comparison object for all the specified props
 */
export const hasSameProps = (comparisonObject: object, propertyNames: string[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName) => hasSameProp(comparisonObject, propertyName)(arg)));
