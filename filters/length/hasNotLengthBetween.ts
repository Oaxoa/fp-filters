import { not } from 'fp-booleans';
import { hasLengthMax } from './hasLengthMax';

/**
 * Argument has not a length between min and max
 */
export const hasNotLengthBetween = not(hasLengthMax);
