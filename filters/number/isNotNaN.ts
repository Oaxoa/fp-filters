import { not } from 'fp-booleans';

/**
 * Returns true if the number is NaN
 */
export const isNotNaN = not(isNaN);
