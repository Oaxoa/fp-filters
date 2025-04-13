import { TTypeMap } from './types.js';
import { typeChecks } from './constants.js';

export const isOfType =
	<K extends keyof TTypeMap>(type: K) =>
	(arg: unknown): arg is TTypeMap[K] =>
		typeChecks[type](arg);
