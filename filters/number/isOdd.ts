import { not } from 'fp-booleans';
import { isEven } from './isEven.js';

/**
 * Returns true if the number is odd
 */
export const isOdd = not(isEven);
