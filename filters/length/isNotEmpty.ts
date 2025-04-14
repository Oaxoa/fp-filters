import {not} from 'fp-booleans';
import {assignName} from '../../utils.js';
import {isEmpty} from './isEmpty.js';

/**
 * Returns true if the argument is a non-empty string, array, or object. (length !== 0)
 */
export const isNotEmpty = not(isEmpty);
assignName(isNotEmpty, 'isNotEmpty');
