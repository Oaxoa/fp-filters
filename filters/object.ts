import { not, TPredicate } from 'fp-booleans';
import { isUndefined } from './type';

/**
 * arg has the specified prop
 */
export function hasProp(propertyName: string, f: TPredicate<unknown[]>): TPredicate<[object]>;
export function hasProp(propertyName: string, value?: unknown): TPredicate<[object]>;
export function hasProp(propertyName: string, valueOrFilter?: unknown) {
	return (arg: object) => {
		const property: unknown = arg?.[propertyName as keyof typeof arg];
		if (property === undefined) return false;
		if (typeof valueOrFilter === 'function') {
			return valueOrFilter(property);
		} else if (typeof valueOrFilter === 'undefined') {
			return property !== undefined;
		} else {
			return valueOrFilter === property;
		}
	};
}

/**
 * arg does not have the specified prop
 */
export const hasNotProp = not(hasProp);

/**
 * arg has all the specified props
 */
export const hasProps = (propertyNames: string[], values?: unknown[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName, index) => hasProp(propertyName, values?.[index])(arg)));

/**
 * arg does not have all the specified props
 */
export const hasNotProps = not(hasProps);

/**
 * arg has the same value of the comparison object for the specified prop
 */
export const hasSameProp = (comparisonObject: object, propertyName: string) => (arg: object) => {
	if (isUndefined(comparisonObject) || isUndefined(arg)) return false;
	const argProperty = arg[propertyName as keyof typeof arg];
	const comparisonProperty = comparisonObject[propertyName as keyof typeof comparisonObject];
	return argProperty === comparisonProperty;
};
/**
 * arg does not have the same value of the comparison object for the specified prop
 */
export const hasNotSameProp = not(hasSameProp);

/**
 * arg has the same value of the comparison object for all the specified props
 */
export const hasSameProps = (comparisonObject: object, propertyNames: string[]) => (arg: object) =>
	Boolean(propertyNames?.every((propertyName) => hasSameProp(comparisonObject, propertyName)(arg)));

/**
 * arg does not have the same value of the comparison object for all the specified props
 */
export const hasNotSameProps = not(hasSameProps);
