import { not } from 'fp-booleans';
import { hasSameProp } from './hasSameProp.js';

/**
 * arg does not have the same value of the comparison object for the specified prop
 */
export const hasNotSameProp = not(hasSameProp);
