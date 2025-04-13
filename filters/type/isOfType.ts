import { TTypeMap } from './types';
import { typeChecks } from './constants';

export const isOfType =
	<K extends keyof TTypeMap>(type: K) =>
	(arg: unknown): arg is TTypeMap[K] =>
		typeChecks[type](arg);
