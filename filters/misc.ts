import { not } from 'fp-booleans';

/**
 * Returns all elements
 */
export const all = () => true;

/**
 * Returns no elements
 */
export const none = () => false;

/**
 * Returns true if the argument is equal to the comparison parameter: ===
 */
export const is =
	<T>(comparison: T) =>
	(arg: T) =>
		comparison === arg;
/**
 * Returns true if the argument is different from the comparison parameter: !==
 */
export const isNot = not(is);
