import {assignName} from '../../utils.js';
import {hasLength} from './hasLength.js';

/**
 * Returns true if the argument is an empty string, array, or object. (length === 0)
 */
export const isEmpty = hasLength(0);
assignName(isEmpty, 'isEmpty');
