import { hasSameProp } from './hasSameProp.js';

/**
 * Uses {@link hasSameProp} to check if the object has all the properties
 */
export const hasSameProps = (comparisonObject: object, propertyNames: string[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName) => hasSameProp(comparisonObject, propertyName)(arg)));
