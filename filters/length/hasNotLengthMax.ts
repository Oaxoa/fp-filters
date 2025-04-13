import { not } from 'fp-booleans';
import { hasLengthMax } from './hasLengthMax.js';

/**
 * Argument exceeds a maximum length of len
 */
export const hasNotLengthMax = not(hasLengthMax);
