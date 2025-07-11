import { hasProp } from './hasProp.js';
import { not } from 'fp-booleans';

/**
 * Negative of {@link hasProp}
 */
export const hasNotProp = not(hasProp);
