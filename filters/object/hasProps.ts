import { hasProp } from './hasProp';

/**
 * arg has all the specified props
 */
export const hasProps = (propertyNames: string[], values?: unknown[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName, index) => hasProp(propertyName, values?.[index])(arg)));
