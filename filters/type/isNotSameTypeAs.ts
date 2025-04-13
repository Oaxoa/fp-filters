import { TTypeMap } from './types';
import { isNotOfType } from './isNotOfType';

export const isNotSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isNotOfType(typeof comparison as keyof TTypeMap)(arg);
