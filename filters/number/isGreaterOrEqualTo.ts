import { isLowerThan } from './isLowerThan';
import { not } from 'fp-booleans';

/**
 * Returns true if the number is greater than or equal to
 */
export const isGreaterOrEqualTo = not(isLowerThan);
