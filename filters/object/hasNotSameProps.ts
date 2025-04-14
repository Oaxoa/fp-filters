import {not} from 'fp-booleans';
import {hasSameProps} from './hasSameProps.js';

/**
 * Negative of {@link hasSameProps}
 */
export const hasNotSameProps = not(hasSameProps);
