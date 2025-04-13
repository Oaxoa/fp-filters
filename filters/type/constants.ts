import { TTypeMap } from './types.js';
import { checkTypeOf } from './checkTypeOf.js';
import { isInstanceOf } from './isInstanceOf.js';
import { is } from '../misc/is.js';

export const typeChecks: Record<keyof TTypeMap, (arg: unknown) => boolean> = {
	string: checkTypeOf('string'),
	number: checkTypeOf('number'),
	boolean: checkTypeOf('boolean'),
	object: checkTypeOf('object'),
	array: isInstanceOf(Array),
	undefined: checkTypeOf('undefined'),
	date: isInstanceOf(Date),
	null: is(null),
};
