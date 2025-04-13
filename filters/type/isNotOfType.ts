import { TTypeMap } from './types';
import { typeChecks } from './constants';

export const isNotOfType =
	<K extends keyof TTypeMap>(type: K) =>
	<T>(arg: T): arg is Exclude<T, TTypeMap[K]> =>
		!typeChecks[type](arg);
