import { not } from 'fp-booleans';
import { hasLengthMin } from './hasLengthMin.js';

/**
 * Argument does not meet a minimum length of len
 */
export const hasNotLengthMin = not(hasLengthMin);
