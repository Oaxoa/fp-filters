import { assignName } from '../../utils';
import { hasLength } from './hasLength';

/**
 * Argument is empty
 */
export const isEmpty = hasLength(0);
assignName(isEmpty, 'isEmpty');
