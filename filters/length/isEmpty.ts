import { assignName } from '../../utils.js';
import { hasLength } from './hasLength.js';

/**
 * Argument is empty
 */
export const isEmpty = hasLength(0);
assignName(isEmpty, 'isEmpty');
