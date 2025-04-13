import { and } from 'fp-booleans';
import { hasLengthMin } from './hasLengthMin.js';
import { hasLengthMax } from './hasLengthMax.js';

/**
 * Argument has a length between min and max
 */
export const hasLengthBetween = (min: number, max: number) => and(hasLengthMin(min), hasLengthMax(max));
