import { not } from 'fp-booleans';
import { hasProps } from './hasProps.js';

/**
 * Negative of {@link hasProps}
 */
export const hasNotProps = not(hasProps);
