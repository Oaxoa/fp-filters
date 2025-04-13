import { isGreaterThan } from './isGreaterThan';
import { not } from 'fp-booleans';

/**
 * Returns true if the number is lower than or equal to
 */
export const isLowerOrEqualTo = not(isGreaterThan);
