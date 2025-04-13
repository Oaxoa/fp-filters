import { TTypeMap } from './types.js';
import { isOfType } from './isOfType.js';

export const isSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isOfType(typeof comparison as keyof TTypeMap)(arg);
