import {not} from 'fp-booleans';
import {hasSameProp} from './hasSameProp.js';

/**
 * Negative of {@link hasSameProp}
 */
export const hasNotSameProp = not(hasSameProp);
