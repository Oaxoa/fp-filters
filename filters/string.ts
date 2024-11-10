import { not, or } from 'fp-booleans';
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

const stringMethodProxy = (method: 'startsWith' | 'endsWith' | 'includes') => (q: string) => (arg: string) =>
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
 * Returns true if the string is using a uniform case (lower or upper)
 */
export const isUniformCase = or(isUpperCase, isLowerCase);
/**
 * Returns true if the string is using a mixed case (not lower or upper)
 */
// export const isMixedCase = not(isUniformCase);
/**
 * Returns true if the string is empty ('')
 */
export const isEmptyString = is('');
/**
 * Returns true if the trimmed string is empty ('')
 */
export const isEmptyStringTrim = (arg: string) => arg.trim() === '';

/**
 * Returns true if the string could be trimmed
 */
export const isTrimmable = (arg: string) => arg.trim() !== arg;
/**
 * Returns true if the string could be trimmed
 */
export const isTrimmableStart = (arg: string) => arg.trimStart() !== arg;
/**
 * Returns true if the string could be trimmed
 */
export const isTrimmableEnd = (arg: string) => arg.trimEnd() !== arg;

/**
 * Returns true is the string is a valid email address according to the W3C implementation:
 * https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 * If you do not like the regexp just make your own function by using `matches(REGEXP)`
 */
export const isEmail = matches(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
/**
 * Returns true if a string is palindrome
 * A loop should be faster than idiomatic implementations (time and space wise) therefore no fp here
 */
export const isPalindrome = (arg: string) => {
	for (let i = 0; i < arg.length / 2; i++) {
		if (arg[i] !== arg[arg.length - i - 1]) {
			return false;
		}
	}
	return true;
};
