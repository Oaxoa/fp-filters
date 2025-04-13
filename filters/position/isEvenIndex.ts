import { assignName } from '../../utils.js';
import { pattern } from './pattern.js';

/**
 * Returns elements with an even index
 */
export const isEvenIndex = pattern(true, false);
assignName(isEvenIndex, 'isEvenIndex');
