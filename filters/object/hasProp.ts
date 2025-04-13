import { TPredicate } from 'fp-booleans';

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
