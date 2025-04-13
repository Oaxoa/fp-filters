import { not } from 'fp-booleans';
import { hasSameProps } from './hasSameProps.js';

/**
 * arg does not have the same value of the comparison object for all the specified props
 */
export const hasNotSameProps = not(hasSameProps);
