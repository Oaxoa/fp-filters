import { not } from 'fp-booleans';
import { isEven } from './isEven';

/**
 * Returns true if the number is odd
 */
export const isOdd = not(isEven);
