import { not } from 'fp-booleans';
import { isPositiveOrZero } from './isPositiveOrZero';

/**
 * Returns true if the number is negative
 */
export const isNegative = not(isPositiveOrZero);
