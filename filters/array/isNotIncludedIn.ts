import { not } from 'fp-booleans';
import { isIncludedIn } from './isIncludedIn.js';

/**
 * Argument is not present in an array
 */
export const isNotIncludedIn = not(isIncludedIn);
