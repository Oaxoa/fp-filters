import { not } from 'fp-booleans';
import { assignName } from '../../utils';
import { isEmpty } from './isEmpty';

/**
 * Argument is not empty
 */
export const isNotEmpty = not(isEmpty);
assignName(isNotEmpty, 'isNotEmpty');
