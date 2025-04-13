import { not } from 'fp-booleans';
import { hasLength } from './hasLength.js';

/**
 * Argument has not a specific length of len
 */
export const hasNotLength = not(hasLength);
