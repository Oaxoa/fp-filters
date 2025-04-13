import { not } from 'fp-booleans';
import { isPositiveOrZero } from './isPositiveOrZero.js';

/**
 * Returns true if the number is negative
 */
export const isNegative = not(isPositiveOrZero);
