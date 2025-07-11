import { TPredicate } from 'fp-booleans';

/**
 * Higher-order function. Returns a function that checks if the argument has the specified prop.
 * It can check:
 * 1. if the prop exists
 * 2. if the prop is equal to a value
 * 3. if it passes a filter
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
