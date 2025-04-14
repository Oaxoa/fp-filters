import {not} from 'fp-booleans';
import {isTrue} from './isTrue.js';

/**
 * Returns true if the argument is exactly a boolean false
 */
export const isFalse = not(isTrue);
