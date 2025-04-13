import { TTypeMap } from './types.js';
import { isNotOfType } from './isNotOfType.js';

export const isNotSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isNotOfType(typeof comparison as keyof TTypeMap)(arg);
