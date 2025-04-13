import { isPositive } from './isPositive.js';
import { not } from 'fp-booleans';

/**
 * Returns true if the number is negative or zero
 */
export const isNegativeOrZero = not(isPositive);
