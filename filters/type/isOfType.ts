import {TTypeMap} from './types.js';
import {typeChecks} from './constants.js';

/**
 * Higher-order function that returns a type guard for the specified type.
 */
export const isOfType =
	<K extends keyof TTypeMap>(type: K) =>
	(arg: unknown): arg is TTypeMap[K] =>
		typeChecks[type](arg);
