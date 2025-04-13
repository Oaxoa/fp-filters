import { not } from 'fp-booleans';
import { is } from './is';

/**
 * Returns true if the argument is different from the comparison parameter: !==
 */
export const isNot = not(is);
