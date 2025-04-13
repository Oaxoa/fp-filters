import { TTypeMap } from './types';
import { checkTypeOf } from './checkTypeOf';
import { isInstanceOf } from './isInstanceOf';
import { is } from '../misc/is';

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
