import { matches } from './matches';

/**
 * Returns true is the string is a valid email address according to the W3C implementation:
 * https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 * If you do not like the regexp just make your own function by using `matches(REGEXP)`
 */
export const isEmail = matches(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
