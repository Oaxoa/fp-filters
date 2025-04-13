import { TTypeMap } from './types';
import { isOfType } from './isOfType';

export const isSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isOfType(typeof comparison as keyof TTypeMap)(arg);
