import { TTypeMap } from './types.js';
import { typeChecks } from './constants.js';

export const isNotOfType =
	<K extends keyof TTypeMap>(type: K) =>
	<T>(arg: T): arg is Exclude<T, TTypeMap[K]> =>
		!typeChecks[type](arg);
