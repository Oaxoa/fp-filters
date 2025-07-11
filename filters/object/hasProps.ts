import { hasProp } from './hasProp.js';

/**
 * Uses {@link hasProp} to check if the object has all the properties
 */
export const hasProps = (propertyNames: string[], values?: unknown[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName, index) => hasProp(propertyName, values?.[index])(arg)));
