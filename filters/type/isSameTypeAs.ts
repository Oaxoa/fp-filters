import { TTypeMap } from './types.js';
import { isOfType } from './isOfType.js';

/**
 * Returns true if the argument is of the same type as the comparison.
 */
export const isSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isOfType(typeof comparison as keyof TTypeMap)(arg);
