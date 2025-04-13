import { not } from 'fp-booleans';
import { assignName } from '../../utils.js';
import { isEmpty } from './isEmpty.js';

/**
 * Argument is not empty
 */
export const isNotEmpty = not(isEmpty);
assignName(isNotEmpty, 'isNotEmpty');
