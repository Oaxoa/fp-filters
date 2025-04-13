import { not } from 'fp-booleans';
import { isIncludedIn } from './isIncludedIn';

/**
 * Argument is not present in an array
 */
export const isNotIncludedIn = not(isIncludedIn);
