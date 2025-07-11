import { TTypeMap } from './types.js';
import { isNotOfType } from './isNotOfType.js';

/**
 * Returns true if the argument is not of the same type as the comparison.
 */
export const isNotSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isNotOfType(typeof comparison as keyof TTypeMap)(arg);
