import { not } from 'fp-booleans';
import { hasProps } from './hasProps';

/**
 * arg does not have all the specified props
 */
export const hasNotProps = not(hasProps);
