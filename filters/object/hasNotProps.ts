import { not } from 'fp-booleans';
import { hasProps } from './hasProps.js';

/**
 * arg does not have all the specified props
 */
export const hasNotProps = not(hasProps);
