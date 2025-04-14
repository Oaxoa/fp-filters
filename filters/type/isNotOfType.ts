import {TTypeMap} from './types.js';
import {typeChecks} from './constants.js';

/**
 * Higher-order function that returns a type guard for the specified type.
 * This function checks if the argument is NOT of the specified type.
 */
export const isNotOfType =
	<K extends keyof TTypeMap>(type: K) =>
	<T>(arg: T): arg is Exclude<T, TTypeMap[K]> =>
		!typeChecks[type](arg);
