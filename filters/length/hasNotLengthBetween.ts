import { not } from 'fp-booleans';
import { hasLengthMax } from './hasLengthMax.js';

/**
 * Argument has not a length between min and max
 */
export const hasNotLengthBetween = not(hasLengthMax);
