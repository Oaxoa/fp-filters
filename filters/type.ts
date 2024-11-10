/*
Can't use fp-booleans not() here to negate functions as it doesn't work for negating TS type predicates (type guards)
 */

import { is } from './misc';

export type TTypeMap = {
	string: string;
	number: number;
	boolean: boolean;
	object: object;
	array: unknown[];
	undefined: undefined;
	date: Date;
	null: null;
};

const checkTypeOf = (type: keyof TTypeMap) => (arg: unknown) => typeof arg === type;

export const isInstanceOf =
	<T>(classReference: new (...args: any[]) => T) =>
	(arg: unknown): arg is T =>
		arg instanceof classReference;

const typeChecks: Record<keyof TTypeMap, (arg: unknown) => boolean> = {
	string: checkTypeOf('string'),
	number: checkTypeOf('number'),
	boolean: checkTypeOf('boolean'),
	object: checkTypeOf('object'),
	array: isInstanceOf(Array),
	undefined: checkTypeOf('undefined'),
	date: isInstanceOf(Date),
	null: is(null),
};

export const isOfType =
	<K extends keyof TTypeMap>(type: K) =>
	(arg: unknown): arg is TTypeMap[K] =>
		typeChecks[type](arg);

export const isNotOfType =
	<K extends keyof TTypeMap>(type: K) =>
	<T>(arg: T): arg is Exclude<T, TTypeMap[K]> =>
		!typeChecks[type](arg);

export const isSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isOfType(typeof comparison as keyof TTypeMap)(arg);

export const isNotSameTypeAs =
	<T>(comparison: T) =>
	(arg: unknown): arg is T =>
		isNotOfType(typeof comparison as keyof TTypeMap)(arg);

export const isString = isOfType('string');
export const isNotString = isNotOfType('string');
export const isNumber = isOfType('number');
export const isNotNumber = isNotOfType('number');
export const isBoolean = isOfType('boolean');
export const isNotBoolean = isNotOfType('boolean');
export const isObject = isOfType('object');
export const isNotObject = isNotOfType('object');
export const isArray = isOfType('array');
export const isNotArray = isNotOfType('array');
export const isUndefined = isOfType('undefined');
export const isNotUndefined = isNotOfType('undefined');
export const isDate = isOfType('date');
export const isNotDate = isNotOfType('date');
export const isNull = isOfType('null');
export const isNotNull = isNotOfType('null');
