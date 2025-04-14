import {not} from 'fp-booleans';

/**
 * Returns true if the number is not NaN
 */
export const isNotNaN = not(isNaN);
