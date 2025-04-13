import { assignName } from '../../utils';
import { pattern } from './pattern';

/**
 * Returns elements with an even index
 */
export const isEvenIndex = pattern(true, false);
assignName(isEvenIndex, 'isEvenIndex');
