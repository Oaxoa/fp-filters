import { not } from 'fp-booleans';
import { isZero } from './isZero.js';

/**
 * Returns true if the number is not zero
 */
export const isNotZero = not(isZero);
