import { not } from 'fp-booleans';
import { is } from './misc.js';

/**
 * Returns true if the string matches the specified regexp
 */
export const matches =
	(re: RegExp) =>
	(arg: string): boolean =>
		Boolean(arg?.match(re));
/**
 * Returns false if the string matches the specified regexp
 */
export const doesNotMatch = not(matches);

const stringMethodProxy =
	(method: 'startsWith' | 'endsWith' | 'includes') => (q: string) => (arg: string) =>
		String.prototype[method].call(arg, q);

/**
 * Returns true if the string starts with the specified substring
 */
export const startsWith = stringMethodProxy('startsWith');
/**
 * Returns true if the string ends with the specified substring
 */
export const endsWith = stringMethodProxy('endsWith');
/**
 * Returns true if the string includes the specified substring
 */
export const includes = stringMethodProxy('includes');
/**
 * Returns true if the string is all upper-case
 */
export const isUpperCase = (arg: string) => arg.toUpperCase() === arg;
/**
 * Returns true if the string is all lower-case
 */
export const isLowerCase = (arg: string) => arg.toLowerCase() === arg;
/**
 * Returns true if the string is empty ('')
 */
export const isEmptyString = is('');
/**
 * Returns true if the trimmed string is empty ('')
 */
export const isEmptyStringTrim = (arg: string) => arg.trim() === '';
