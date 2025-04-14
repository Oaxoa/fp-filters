import {not} from 'fp-booleans';

/**
 * Returns true if the argument is exactly falsey (0, '', undefined, null, etc.)
 */
export const isFalsey = not(Boolean);
