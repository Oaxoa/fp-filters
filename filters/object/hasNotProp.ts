import { hasProp } from './hasProp';
import { not } from 'fp-booleans';

/**
 * arg does not have the specified prop
 */
export const hasNotProp = not(hasProp);
